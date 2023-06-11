import { initialDataSelector } from "@/store/initialData/reducer";
import styles from "./taskNamePage.module.css";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Embedded, TaskAside, TaskSection } from "@/components";
import { useVerify } from "@/utils/useVerify";
import { useVerifyAccess } from "@/utils/useVerifyAccess";

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
  const { exp, storedTasks, nfts } = useSelector(zkRecordSelector);
  const { initialData, needExp } = useSelector(initialDataSelector);
  const { access } = useVerifyAccess(journey);
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

  let countOfEfforts = storedTasks?.[journey]?.[taskName];
  if (!walletAddress) {
    countOfEfforts = false;
  }

  return (
    <>
      {(initialData && access && (
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
      )) || <p>You havent minted NFT yet...</p>}
    </>
  );
};

export default TaskPage;
