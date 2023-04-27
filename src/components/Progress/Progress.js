import { useSelector } from 'react-redux';
import styles from './Progress.module.css';
import { useAccount } from 'wagmi';
import { zkRecordSelector } from '@/store/zkRecord/reducer';

const Progress = () => {
  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  return (
    <div className={styles.progress}>
      My progress - {WalletAddress && exp}XP
      <p>
        You have{' '}
        {WalletAddress &&
          nfts &&
          Object.entries(nfts).filter(([_, value]) => value !== 0).length}{' '}
        NFT
      </p>
    </div>
  );
};

export default Progress;
