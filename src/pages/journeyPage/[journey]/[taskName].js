import { updateZKRecord } from "@/serverUtils/updateZKRecord";
import { initialDataSelector } from "@/store/initialData/reducer";
import {
  setExp,
  setStoredTasks,
  zkRecordSelector,
} from "@/store/zkRecord/reducer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

const TaskPage = ({ ...props }) => {
  const { address: WalletAddress } = useAccount();
  const { exp, storedTasks } = useSelector(zkRecordSelector);
  const router = useRouter();
  const { taskName, journey } = router.query;
  const dispatch = useDispatch();
  const { initialData } = useSelector(initialDataSelector);

  const earnedExp = initialData[journey]?.tasks[taskName]?.exp;
  const countOfEfforts = storedTasks[journey]?.[taskName];
  const newPath = `tasks.${journey}.${taskName}`;

  const handleVerify = async () => {
    const newExp = exp + earnedExp;
    const newCountOfEfforts = countOfEfforts + 1;
    const response = await updateZKRecord(
      WalletAddress,
      newExp,
      newPath,
      newCountOfEfforts
    );
    dispatch(setExp(response.exp));
    dispatch(setStoredTasks(response.tasks));
  };

  return (
    <>
      <div>
        <p>I am {taskName}</p>
        {WalletAddress && <button onClick={handleVerify}>VERIFY</button>}
        <p>
          You have done this task for {countOfEfforts}
          times
        </p>
      </div>
    </>
  );
};

export default TaskPage;
