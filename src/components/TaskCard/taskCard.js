import styles from "./taskCard.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { clsx } from "clsx";
import ProjectName from "@/components/TaskCard/ProjectName";
import Badge from "@/components/Badge/Badge";
import Status from "@/components/Status/Status";
import { XpSvg } from "@/components";
import { useAccount } from "wagmi";

export default function TaskCard({
  taskName,
  journeyName,
  title,
  source,
  link,
  exp,
  showNewTaskBadge = false,
  showCounterBadge = false,
  sidebar = false,
}) {
  const { storedTasks } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  let statusOfTask = storedTasks?.[journeyName]?.[taskName];
  if (!WalletAddress) {
    statusOfTask = false;
  }

  return (
    <Link
      href={`/journeyPage/${journeyName}/${taskName}`}
      className={clsx(styles.card, sidebar && styles.cardSidebar)}
    >
      <div className={styles.cardHeader}>
        <ProjectName tag={source}>{source}</ProjectName>
        {showNewTaskBadge && <Badge appereance="blue">New!</Badge>}
      </div>
      <div
        className={clsx(
          styles.cardContent,
          sidebar && styles.cardContentSidebar,
          sidebar && styles.cardSidebar
        )}
      >
        {title}
      </div>
      <div className={styles.cardFooter}>
        <Badge showIconLeft IconLeft={XpSvg}>
          {exp}
        </Badge>
        <div className={styles.cardFooterStatus}>
          {showCounterBadge && <Badge>3 times</Badge>}
          <Status type={statusOfTask ? "completed" : "todo"} />
        </div>
      </div>
    </Link>
  );
}
