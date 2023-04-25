import Link from "next/link";
import styles from "./journeyCard.module.css";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { getJourneyTasks } from "@/utils/getJourneyTasks";
import { limitsForMinting } from "@/consts/limitsForMinting";

export const JourneyCard = ({
  journeyName,
  journeyTitle,
  journeyNick,
  ...props
}) => {
  const { storedTasks } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);
  return (
    <>
      <div className={styles.card}>
        <p>{journeyNick}</p>
        <p>{journeyTitle}</p>
        <p>
          Progress: {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks}
        </p>
        <>EXP of lvl: {limitsForMinting[journeyName]}</>

        <Link href={`/journeyPage/${journeyName}`}>View Tasks</Link>
      </div>
    </>
  );
};
