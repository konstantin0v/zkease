import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";
import { Leaderboard } from "@/components";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <div {...props}>
      <div className={styles.progress}>Progress</div>

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
