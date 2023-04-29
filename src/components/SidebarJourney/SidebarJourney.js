import { useSelector } from "react-redux";
import Status from "../Status/Status";
import styles from "./SidebarJourney.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { getJourneyTasks } from "@/utils/getJourneyTasks";

const SidebarJourney = ({ journeyName, journeyNick }) => {
  const { storedTasks } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);

  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <Status
          type={
            (objOfProgress?.doneTasks === objOfProgress?.totalTasks &&
              "completed") ||
            (objOfProgress?.doneTasks < objOfProgress?.totalTasks &&
              objOfProgress?.doneTasks !== 0 &&
              "progress")
          }
        />
        <p className={styles.top__text}>
          {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks}
        </p>
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={(objOfProgress?.doneTasks / objOfProgress?.totalTasks) * 100}
        className={styles.bar}
      />
      <h3 className={styles.subtitle}>{journeyNick}</h3>
    </div>
  );
};

export default SidebarJourney;
