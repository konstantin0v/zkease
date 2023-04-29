import Status from '../Status/Status';
import styles from './SidebarJourney.module.css';
import ProgressBar from '@ramonak/react-progress-bar';

const SidebarJourney = () => {
  return (
    <div className={styles.box}>
      <div className={styles.top}>
        <Status
          // type={
          //   (objOfProgress?.doneTasks === 0 && 'todo') ||
          //   (objOfProgress?.doneTasks === objOfProgress?.totalTasks &&
          //     'completed') ||
          //   (objOfProgress?.doneTasks < objOfProgress?.totalTasks &&
          //     objOfProgress?.doneTasks !== 0 &&
          //     'progress')
          // }
          type={'progress'}
        />
        <p className={styles.top__text}>
          {/* {userProgress}/{objOfProgress?.totalTasks} */}3 / 5
        </p>
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={90}
        // completed={(userProgress / objOfProgress?.totalTasks) * 100}
        className={styles.bar}
      />
      <h3 className={styles.subtitle}>Journey Name</h3>
    </div>
  );
};

export default SidebarJourney;
