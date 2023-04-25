import React, { useEffect, useState } from "react";
import styles from "./task.module.css";

export const Task = ({
  description = "Description",
  task = "Quest Title",
  progessInBar = 1,
  taskStatus = "not Started",
  wholeProgress = 4,
}) => {
  const [userProgress, setUserProgress] = useState(progessInBar);
  const [status, setStatus] = useState(taskStatus);

  if (typeof document !== "undefined") {
    const progress = document.querySelector("#progress");
  }
  const changeWidth = () => {
    if(userProgress > wholeProgress) return;
    
    progress.style.width = `${(userProgress / wholeProgress) * 100}%`;
  };

  useEffect(() => {
    changeWidth();
    if (userProgress && userProgress < wholeProgress) setStatus("in Progress");

    if (userProgress === wholeProgress) setStatus("Done");
  }, [userProgress]);

  const handleClick = () => {
    setUserProgress(userProgress + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarText}>
          <div className={styles.status}>
            <p>{status}</p>
          </div>

          <p>
            {userProgress}/{wholeProgress}
          </p>
        </div>

        <div className={styles.bar}>
          <div id="progress" className={styles.done}></div>
        </div>
      </div>
      {/* кнопка для теста  */}
      {/* <button onClick={handleClick}>НАЖМИ МЕНЯ</button> */}

      <div className={styles.content}>
        <p className={styles.contentTask}>{task}</p>

        <p className={styles.contentDescription}>{description}</p>
      </div>

      <div className={styles.tags}></div>
    </div>
  );
};
