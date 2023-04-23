import { setExp, setStoredTasks, zkRecordSelector } from "@/store/zkRecord/reducer";
import { getTaskValue, handleVerify } from "@/utils/commonFunctions";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";


 const TaskPage = ({...props }) => {
  const { address: WalletAddress } = useAccount();
  const { exp, storedTasks } = useSelector(zkRecordSelector);
    const router = useRouter();
   // const { taskName } = router.query;
    const { taskName } = router.query;
  const dispatch = useDispatch();
  
  const handleVerifyByPlace = async () => {
    await handleVerify(
      exp,
      storedTasks,
      WalletAddress,
      taskName,
      dispatch,
      setExp,
      setStoredTasks
    );
  };

  return <>
  <div >
   <p>I am {taskName}</p> 
   {WalletAddress && <button onClick={handleVerifyByPlace}>VERIFY</button>}
        <p>
          You have done this task for {getTaskValue(storedTasks, taskName)} times
        </p>

  </div>
 </>;
};

export default TaskPage;