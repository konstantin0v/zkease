import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { Leaderboard } from "@/components";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { exp } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  return (
    <div {...props}>
      <div className={styles.progress}>Progress - {WalletAddress && exp}XP</div>
      {currentPage === "/" ? (
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
      )}
    </div>
  );
};
export default Sidebar;
