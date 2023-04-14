import { useRouter } from "next/router";
import styles from "./Sidebar.module.css";

const Sidebar = ({ ...props }) => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <div {...props}>
      <div className={styles.progress}>Progress</div>

      {currentPage === "/" ? (
        <>
          <div className={styles.achievements}>Achievements</div>
          <div className={styles.leaderboard}>Leaderboard</div>
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
