import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { Leaderboard } from "@/components";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import { allTasks } from "@/consts/allTasks";
import TaskCard from "@/components/TaskCard/taskCard";
import { v4 as uuidv4 } from "uuid";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { journey, taskName } = router.query;
  const tasksByJourney = allTasks[journey];

  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
console.log('NAME from address string',journey, 'taskName', taskName);
  return (
    <div {...props}>
      <div className={styles.progress}>Progress - {WalletAddress && exp}XP
      <p>You have NFT:</p>
      </div>
      {/* {currentPage === "/" ? (
        <>
          <div className={styles.achievements}>Achievements</div>
          <Leaderboard />
        </>
      ) : (
        <>
          <div className={styles.task}>mute</div>
          <div className={styles.task}>orbiter</div>
          <div className={styles.task}>zk</div>
          <div className={styles.task}>celer</div>
        </>
      )} */}
{currentPage.includes("task")
 ?

<>
  {(tasksByJourney &&
          Object.keys(tasksByJourney).map((task) => (
            <span key={uuidv4()}>
              
              <TaskCard taskName={task}/>

            </span>
          ))) || <p>No tasks found</p>}   
  </>      
  
  :   <>
  <div className={styles.achievements}>Achievements</div>
  <Leaderboard />
</>
}


    </div>
  );
};
export default Sidebar;
