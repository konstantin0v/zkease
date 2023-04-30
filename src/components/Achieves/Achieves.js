import { useSelector } from 'react-redux';
import styles from './Achieves.module.css';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { useAccount } from 'wagmi';
import Image from 'next/image';

const Achieves = () => {
  const { nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const nftComponents = ['nft1', 'nft2', 'nft3', 'nft4', 'nft1'];
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }
  return (
    <div className={styles.achievements}>
      <h2 className={styles.title}>Achieves</h2>
      {WalletAddress && nftCount > 0 ? (
        <ul className={styles.box}>
          {nftComponents.slice(0, nftCount).map((item) => (
            <Image
              src={`/image/${item}.png`}
              alt="nft"
              width={64}
              height={64}
              className={styles.nft}
              key={item}
            />
          ))}
          <div className={styles.overlay}></div>
        </ul>
      ) : (
        <h3 className={styles.subtitle}>
          Complete journeys to earn XP and gain achievements.
        </h3>
      )}
    </div>
  );
};

export default Achieves;
