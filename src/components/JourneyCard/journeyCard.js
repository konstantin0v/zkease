import Link from 'next/link';
// import styles from "./journeyCard.module.css";

import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { getJourneyTasks } from "@/utils/getJourneyTasks";
import { limitsForMinting } from "@/consts/limitsForMinting";
import React, { useEffect, useState } from "react";
import styles from "./journeyCard.module.css"
import Status from "../Status/Status";
import { XpSvg } from "..";
import {Badge} from "..";
import ProgressBar from "@ramonak/react-progress-bar";

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
  const { storedTasks } = useSelector(zkRecordSelector);
  const objOfProgress = getJourneyTasks(journeyName, storedTasks);

  const [userProgress, setUserProgress] = useState(objOfProgress?.doneTasks);

  return (
    <Link href={`/journeyPage/${journeyName}`}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.progressBarText}>
            <div className={styles.status}>

              <Status type={(objOfProgress?.doneTasks === 0 && 'todo') || (objOfProgress?.doneTasks === objOfProgress?.totalTasks && "completed") || (objOfProgress?.doneTasks < objOfProgress?.totalTasks && objOfProgress?.doneTasks !== 0 && 'progress')} />
            </div>

            <p>
              {userProgress}/{objOfProgress?.totalTasks}
              {/* Progress: {objOfProgress?.doneTasks}/{objOfProgress?.totalTasks} */}
            </p>
          </div>

          {/* <div className={styles.bar}> */}
          <div className={styles.barContainer}>
              <ProgressBar   
                bgColor="#155EE6"
                baseBgColor="#F7F7F71A"
                height="4px"
                borderRadius="8px"
                customLabel=" " 
                completed={(userProgress / objOfProgress?.totalTasks) * 100}
              />
            </div>
          {/* </div> */}
          {/* <ProgressBar journeyName={journeyName} progress={userProgress} /> */}

        </header>
        
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
