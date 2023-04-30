import Link from 'next/link';
// import styles from "./journeyCard.module.css";

import { useSelector } from 'react-redux';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { getJourneyTasks } from '@/utils/getJourneyTasks';
import { limitsForMinting } from '@/consts/limitsForMinting';
import styles from './journeyCard.module.css';
import Status from '../Status/Status';
import ProgressBar from '@ramonak/react-progress-bar';
import CustomLink from './customLink';
import Badge from '@/components/Badge/Badge';
import { XpSvg } from '@/components';

export const JourneyCard = ({
  journeyName,
  journeyTitle,
  journeyNick,
  prevJourneyName,
  showNewTaskBadge = false,
  ...props
}) => {
  const { storedTasks, nfts } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);

  return (
    <CustomLink
      href={`/journeyPage/${journeyName}`}
      disabled={journeyName != 'journey0' && !nfts[prevJourneyName]}
    >
      <div className={styles.top}>
        <Status
          type={
            (journeyName != 'journey0' && !nfts[prevJourneyName] && 'locked') ||
            (objOfProgress?.doneTasks === 0 && 'todo') ||
            (objOfProgress?.doneTasks === objOfProgress?.totalTasks &&
              'completed') ||
            (objOfProgress?.doneTasks < objOfProgress?.totalTasks &&
              objOfProgress?.doneTasks !== 0 &&
              'progress')
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
      <h4 className={styles.description}>{journeyTitle}</h4>
      <div className={styles.badges}>
        <Badge showIconLeft IconLeft={XpSvg}>
          {limitsForMinting[journeyName]}
        </Badge>
        {showNewTaskBadge && <Badge appereance="blue">New tasks!</Badge>}
      </div>
    </CustomLink>
  );
};
