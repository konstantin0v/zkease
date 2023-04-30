import { updateZKRecord } from '@/serverUtils/updateZKRecord';
import { initialDataSelector } from '@/store/initialData/reducer';
import styles from './taskNamePage.module.css';
import {
  setExp,
  setStoredTasks,
  zkRecordSelector,
} from '@/store/zkRecord/reducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount } from 'wagmi';
import {
  Badge,
  Status,
  ProjectName,
  XpSvg,
  LinkSvg,
  Button,
} from '@/components';
import Accordion from '@/components/Accordion/Accordion';
import Link from 'next/link';

const TaskPage = ({ ...props }) => {
  const { address: WalletAddress } = useAccount();
  const { exp, storedTasks } = useSelector(zkRecordSelector);
  const router = useRouter();
  const { taskName, journey } = router.query;
  const dispatch = useDispatch();
  const { initialData } = useSelector(initialDataSelector);

  const earnedExp = initialData?.[journey]?.tasks[taskName]?.exp;
  const countOfEfforts = storedTasks?.[journey]?.[taskName];
  const newPath = `tasks.${journey}.${taskName}`;

  const handleVerify = async () => {
    const newExp = exp + earnedExp;
    const newCountOfEfforts = countOfEfforts + 1;
    const response = await updateZKRecord(
      WalletAddress,
      newExp,
      newPath,
      newCountOfEfforts
    );
    dispatch(setExp(response.exp));
    dispatch(setStoredTasks(response.tasks));
  };

  return (
    <div className={styles.main}>
      <ul className={styles.top}>
        <li>
          <ProjectName tag="Mute.io">Mute.io</ProjectName>
        </li>
        <li>
          <Status type={'todo'} />
        </li>
      </ul>
      <h2 className={styles.title}>Make any swap</h2>
      <h3 className={styles.subtitle}>
        Mute.io lets you swap cryptocurrencies quietly and easily. Our platform
        is hassle-free and secure, giving you peace of mind while trading. Say
        goodbye to noise and trade your way with us.
      </h3>
      <Accordion />
      <div className={styles.iframewrapper}>
        <p className={styles.iframe__text}>Try here</p>
        <Link href="https://app.mute.io/swap" className={styles.iframe__link}>
          Open new tab
          <LinkSvg className={styles.iframe__svg} />
        </Link>
      </div>
      <iframe src="https://app.mute.io/swap" width="100%" height="800"></iframe>
      <div className={styles.iframewrapper__down}></div>
      <div className={styles.down}>
        {WalletAddress && (
          <Button
            type="intent-primary"
            intent="primary"
            size="large"
            onClick={handleVerify}
            style={{ width: '91px' }}
          >
            Verify
          </Button>
        )}
        <Badge showIconLeft IconLeft={XpSvg}>
          ???
        </Badge>
      </div>
    </div>
  );
};

export default TaskPage;
