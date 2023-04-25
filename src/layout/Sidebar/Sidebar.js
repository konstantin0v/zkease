import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { Leaderboard } from "@/components";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import TaskCard from "@/components/TaskCard/taskCard";
import { v4 as uuidv4 } from "uuid";
import { initialDataSelector } from "@/store/initialData/reducer";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { journey } = router.query;
  const { initialData } = useSelector(initialDataSelector);
  const tasksByJourney = initialData[journey]?.tasks;
  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  return (
    <div {...props}>
      <div className={styles.progress}>
        Progress - {WalletAddress && exp}XP
        <p>
          You have{" "}
          {WalletAddress &&
            nfts &&
            Object.entries(nfts).filter(([_, value]) => value !== 0)
              .length}{" "}
          NFT
        </p>
      </div>
      {currentPage.includes("task") ? (
        <>
          {(tasksByJourney &&
            Object.entries(tasksByJourney).map(([key, task]) => (
              <TaskCard
                key={key}
                taskName={key}
                journeyName={journey}
                {...task}
              />
            ))) || <p>No tasks found</p>}
        </>
      ) : (
        <>
          <div className={styles.achievements}>Achievements</div>
          <Leaderboard />
        </>
      )}
    </div>
  );
};
export default Sidebar;
