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
  ...props
}) => {
  const [userProgress, setUserProgress] = useState(progessInBar);
  const [status, setStatus] = useState(taskStatus);
  const { storedTasks } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);

  // if (typeof document !== "undefined") {
  const progress = document.querySelector(`#${id}`);
  // }
  const changeWidth = () => {
    if (userProgress > wholeProgress) return;

    progress &&
      (progress.style.width = `${(userProgress / wholeProgress) * 100}%`);
  };

  useEffect(() => {
    changeWidth();
    if (userProgress && userProgress < wholeProgress) setStatus('in Progress');

    if (userProgress === wholeProgress) setStatus('Done');
  }, [userProgress]);

  const handleClick = () => {
    setUserProgress(userProgress + 1);
  };

  return (
    <Link href={`/journeyPage/${journeyName}`}>
      <div className={styles.card}>
        <div className={styles.progressBar}>
          <div className={styles.progressBarText}>
            <div className={styles.status}>
              <Status
                type={
                  objOfProgress?.doneTasks === objOfProgress?.totalTasks
                    ? 'completed'
                    : 'progress'
                }
              />
            </div>

            <p>
              {/* {userProgress}/{wholeProgress} */}
              Progress: {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks}
            </p>
          </div>

          <div className={styles.bar}>
            <div id={id} className={styles.done}></div>
          </div>
        </div>
        {/* кнопка для теста  */}
        {/* <button onClick={handleClick}>НАЖМИ МЕНЯ</button> */}

        <div className={styles.content}>
          <p className={styles.contentTask}>{journeyNick}</p>
          <p className={styles.contentDescription}>{journeyTitle}</p>
        </div>

        <div className={styles.tags}></div>

        <Badge showIconLeft IconLeft={XpSvg}>
          {limitsForMinting[id]}
        </Badge>
      </div>
    </Link>
  );
};
