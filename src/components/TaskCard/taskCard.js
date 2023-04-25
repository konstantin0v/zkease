import styles from "./taskCard.module.css";
import Link from "next/link";

export default function TaskCard({ taskName, journey }) {
 
  return (
    <>
  <div className={styles.card}>
  <Link href={`/journeyPage/${journey}/${taskName}`}>
            View CONTENT of task
          </Link>
        <p>i am  {taskName}</p>
      </div>
  
    </>
  );
}
