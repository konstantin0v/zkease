import styles from "./taskCard.module.css";
import Link from "next/link";

export default function TaskCard({
  taskName,
  journeyName,
  title,
  source,
  link,
}) {
  return (
    <>
      <div className={styles.card}>
        <Link href={`/journeyPage/${journeyName}/${taskName}`}>
          View CONTENT of task
        </Link>
        <p>i am {taskName}</p>
        <p>{title}</p>
        <p>{source}</p>
        <p>{link}</p>
      </div>
    </>
  );
}
