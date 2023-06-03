import { updateZKRecord } from "@/serverUtils/updateZKRecord";
import { initialDataSelector } from "@/store/initialData/reducer";
import styles from "./taskNamePage.module.css";
import {
  setExp,
  setStoredTasks,
  zkRecordSelector,
} from "@/store/zkRecord/reducer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Embedded, TaskAside, TaskSection } from "@/components";
import { useVerify } from "@/utils/useVerify";

export async function getServerSideProps(context) {
  try {
    const { journey, taskName } = context.query;
    return {
      props: { journey, taskName },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

const TaskPage = ({ journey, taskName, ...props }) => {
  const { address: walletAddress } = useAccount();
  const dispatch = useDispatch();
  const { exp, storedTasks, nfts, jwt } = useSelector(zkRecordSelector);
  const { initialData, needExp } = useSelector(initialDataSelector);

  const newPath = `tasks.${journey}.${taskName}`;
  let countOfEfforts = storedTasks?.[journey]?.[taskName];
  if (!walletAddress) {
    countOfEfforts = false;
  }
  const router = useRouter();
  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    if (updateCount >= 2 && walletAddress !== undefined) {
      router.push("/");
    }
  }, [walletAddress, updateCount]);

  useEffect(() => {
    setUpdateCount((count) => count + 1);
  }, [walletAddress]);

  const { loader, notif, setNotif, handleVerify } = useVerify(
    journey,
    taskName
  );

  //  IT MUST BE DELETED BEFORE PRODUCTION
  const handleVerifyTEST = async () => {
    try {
      const newExp = exp + initialData[journey].tasks[taskName].exp;
      const newCountOfEfforts = countOfEfforts + 1;
      const response = await updateZKRecord(
        walletAddress,
        newExp,
        newPath,
        newCountOfEfforts,
        jwt
      );
      dispatch(setExp(response.exp));
      dispatch(setStoredTasks(response.tasks));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {(initialData && (
        <div className={styles.wrapper}>
          <TaskAside
            initialData={initialData}
            journey={journey}
            path={taskName}
          />
          <TaskSection
            storedTasks={storedTasks}
            initialData={initialData}
            journey={journey}
            taskName={taskName}
            countOfEfforts={countOfEfforts}
            handleVerify={handleVerify}
            handleVerifyTEST={handleVerifyTEST}
            walletAddress={walletAddress}
            loader={loader}
            notif={notif}
            setNotif={setNotif}
            exp={exp}
            nfts={nfts}
            needExp={needExp}
          />
          <Embedded
            initialData={initialData}
            journey={journey}
            taskName={taskName}
          />
        </div>
      )) || <p>Loading...</p>}
    </>
  );
};

export default TaskPage;
