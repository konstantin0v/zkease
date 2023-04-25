import Link from "next/link";
import styles from "./journeyCard.module.css";

export const JourneyCard = ({ journeyName, ...props }) => {
  return <>
  <div className={styles.card}>
   <p>{journeyName}</p> 
   <Link href={`/journeyPage/${journeyName}`}>
            View Tasks
          </Link>
 
  </div>
 </>;
};
