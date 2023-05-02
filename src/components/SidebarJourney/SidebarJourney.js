import { useSelector } from "react-redux";
import Status from "../Status/Status";
import styles from "./SidebarJourney.module.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { getJourneyTasks } from "@/utils/getJourneyTasks";
import Link from "next/link";
import { useAccount } from "wagmi";
import { initialDataSelector } from "@/store/initialData/reducer";

const SidebarJourney = ({ journeyName, journeyNick }) => {
  const { storedTasks } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);

  const { address: WalletAddress } = useAccount();

  let { doneTasks, totalTasks } = getJourneyTasks(journeyName, storedTasks);
  if (!WalletAddress) {
    (doneTasks = 0),
      (totalTasks = Object.keys(initialData[journeyName].tasks).length);
  }

  return (
    <Link className={styles.box} href={`/journeyPage/${journeyName}`}>
      <div className={styles.top}>
        <Status
          type={
            (doneTasks === totalTasks && "completed") ||
            (doneTasks < totalTasks && doneTasks !== 0 && "progress")
          }
        />
        <p className={styles.top__text}>
          {doneTasks}/{totalTasks}
        </p>
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={(doneTasks / totalTasks) * 100}
        className={styles.bar}
      />
      <h3 className={styles.subtitle}>{journeyNick}</h3>
    </Link>
  );
};

export default SidebarJourney;
