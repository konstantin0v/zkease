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
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { Embedded, TaskAside, TaskSection } from '@/components';

export async function getServerSideProps(context) {
  try {
    const { journey, taskName } = context.query;
    return {
      props: { journey, taskName },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

const TaskPage = ({ journey, taskName, ...props }) => {
  const { address: WalletAddress } = useAccount();
  const dispatch = useDispatch();
  const { exp, storedTasks } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);
  const [firstTxCount, setfirstTxCount] = useState(null);
  const provider = new ethers.providers.JsonRpcProvider(
    // "https://testnet.era.zksync.dev"
    'https://mainnet.era.zksync.io'
  );

  // const earnedExp = initialData[journey].tasks[taskName].exp;
  const newPath = `tasks.${journey}.${taskName}`;
  let countOfEfforts = storedTasks?.[journey]?.[taskName];
  if (!WalletAddress) {
    countOfEfforts = false;
  }
  const router = useRouter();
  const [updateCount, setUpdateCount] = useState(0);
  useEffect(() => {
    if (updateCount >= 2 && WalletAddress !== undefined) {
      router.push('/');
    }
  }, [WalletAddress, updateCount]);

  useEffect(() => {
    setUpdateCount((count) => count + 1);
  }, [WalletAddress]);

  const handleVerify = async () => {
    const newExp = exp + initialData[journey].tasks[taskName].exp;
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

  useEffect(() => {
    (async () => {
      try {
        const txCountFirst = await provider.getTransactionCount(WalletAddress);
        setfirstTxCount(txCountFirst);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [WalletAddress]);

  const handleVerifyTEST = async () => {
    const newExp = exp + initialData[journey].tasks[taskName].exp;
    const newCountOfEfforts = countOfEfforts + 1;
    const txCountNow = await provider.getTransactionCount(WalletAddress);

    if (txCountNow > firstTxCount) {
      setfirstTxCount(txCountNow);
      const response = await updateZKRecord(
        WalletAddress,
        newExp,
        newPath,
        newCountOfEfforts
      );
      dispatch(setExp(response.exp));
      dispatch(setStoredTasks(response.tasks));
    } else {
      window.alert('Oopss, you havent done the task!');
    }
  };

  return (
    <>
      {(initialData && (
        <div className={styles.wrapper}>
          <TaskAside
            initialData={initialData}
            journey={journey}
            path={taskName}
          />
          <TaskSection
            initialData={initialData}
            journey={journey}
            taskName={taskName}
            countOfEfforts={countOfEfforts}
            handleVerify={handleVerify}
            handleVerifyTEST={handleVerifyTEST}
            WalletAddress={WalletAddress}
          />
          <Embedded
            initialData={initialData}
            journey={journey}
            taskName={taskName}
          />
        </div>
      )) || <p>Loading...</p>}
    </>
  );
};

export default TaskPage;
