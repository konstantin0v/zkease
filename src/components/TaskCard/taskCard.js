import {
  Badge,
  Status,
  ProjectName,
  XpSvg,
  Multichain,
  Mintsquare,
  Mute,
  Nexon,
  Onchain,
  Unidex,
  Rhino,
  Spacefi,
  Orbiter,
  Syncswap,
  Zksync,
} from '@/components';
import styles from './taskCard.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { clsx } from 'clsx';

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
  const statusOfTask = storedTasks?.[journeyName]?.[taskName];
  const projectName =
    source.charAt(0).toUpperCase() +
    source.substring(1, source.indexOf('.')).toLowerCase();

  const project = {
    Multichain,
    Mintsquare,
    Mute,
    Nexon,
    Onchain,
    Unidex,
    Rhino,
    Spacefi,
    Orbiter,
    Syncswap,
    Zksync,
  };

  return (
    <Link
      href={`/journeyPage/${journeyName}/${taskName}`}
      className={clsx(styles.card, sidebar && styles.cardSidebar)}
    >
      <div className={styles.cardHeader}>
        <ProjectName Logo={project[projectName]}>{projectName}</ProjectName>
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
          <Status type={statusOfTask ? 'completed' : 'todo'} />
        </div>
      </div>
    </Link>
  );
}
