import Link from 'next/link';
// import styles from "./journeyCard.module.css";

import { useSelector } from 'react-redux';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { getJourneyTasks } from '@/utils/getJourneyTasks';
import { limitsForMinting } from '@/consts/limitsForMinting';
import React, { useEffect, useState } from 'react';
import styles from './journeyCard.module.css';
import Status from '../Status/Status';
import { XpSvg } from '..';
import { Badge } from '..';
import ProgressBar from '@ramonak/react-progress-bar';

// export const JourneyCard = ({
//   journeyName,
//   journeyTitle,
//   journeyNick,
//   ...props
// }) => {
//   const { storedTasks } = useSelector(zkRecordSelector);
//   const objOfProgress = getJourneyTasks(journeyName, storedTasks);
//   return (
//     <>
//       <div className={styles.card}>
//         <p>{journeyNick}</p>
//         <p>{journeyTitle}</p>
//         <p>
//           Progress: {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks}
//         </p>
//         <>EXP of lvl: {limitsForMinting[journeyName]}</>

//         <Link href={`/journeyPage/${journeyName}`}>View Tasks</Link>
//       </div>
//     </>
//   );
// };
export const JourneyCard = ({
  description = 'Description',
  task = 'Quest Title',
  progessInBar = 0,
  taskStatus = 'not Started',
  wholeProgress = 4,
  journeyName,
  journeyTitle,
  journeyNick,
  id,
  showNewTaskBadge = true,
  ...props
}) => {
  const { storedTasks } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);

  const [userProgress, setUserProgress] = useState(objOfProgress?.doneTasks);

  return (
    <Link href={`/journeyPage/${journeyName}`} className={styles.card}>
      <div className={styles.top}>
        <Status
          type={
            (objOfProgress?.doneTasks === 0 && 'todo') ||
            (objOfProgress?.doneTasks === objOfProgress?.totalTasks &&
              'completed') ||
            (objOfProgress?.doneTasks < objOfProgress?.totalTasks &&
              objOfProgress?.doneTasks !== 0 &&
              'progress')
          }
        />
        <p className={styles.top__text}>
          {userProgress}/{objOfProgress?.totalTasks}
        </p>
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={(userProgress / objOfProgress?.totalTasks) * 100}
        className={styles.bar}
      />
      <h3 className={styles.subtitle}>{journeyNick}</h3>
      <h4 className={styles.description}>{journeyTitle}</h4>
      <div className={styles.badges}>
        <Badge showIconLeft IconLeft={XpSvg}>
          {limitsForMinting[id]}
        </Badge>
        {showNewTaskBadge && <Badge appereance="blue">New tasks!</Badge>}
      </div>
    </Link>
  );
};
/* Progress: {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks} */
/* <div className={styles.bar}> */
/* <ProgressBar journeyName={journeyName} progress={userProgress} /> */
/* <button onClick={handleClick}>НАЖМИ МЕНЯ</button> */
