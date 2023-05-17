import { useSelector } from 'react-redux';
import styles from './JourneyAside.module.css';
import ProgressBar from '@ramonak/react-progress-bar';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { getJourneyTasks } from '@/utils/getJourneyTasks';
import { useAccount } from 'wagmi';
import { initialDataSelector } from '@/store/initialData/reducer';
import { Status } from '@/components/Status/Status';

export const JourneyAside = ({ journeyName, journeyNick }) => {
  const { storedTasks } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);

  const { address: WalletAddress } = useAccount();

  let { doneTasks, totalTasks } = getJourneyTasks(journeyName, storedTasks);
  if (!WalletAddress) {
    (doneTasks = 0),
      (totalTasks = Object.keys(initialData[journeyName].tasks).length);
  }

  return (
    <div className={styles.box}>
      <h3 className={styles.subtitle}>{journeyNick}</h3>
      <div className={styles.top}>
        <Status
          type={
            (doneTasks === totalTasks && 'completed') ||
            (doneTasks < totalTasks && doneTasks !== 0 && 'progress')
          }
        />
        <p className={styles.top__text}>
          {doneTasks} / {totalTasks}
        </p>
      </div>
      <ProgressBar
        bgColor="#626EE9"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={(doneTasks / totalTasks) * 100}
        className={styles.bar}
      />
    </div>
  );
};
