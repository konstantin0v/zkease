import { useSelector } from 'react-redux';
import styles from './Achieves.module.css';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import { useAccount } from 'wagmi';
import Image from 'next/image';
import { ArrowRight } from '@/components';

export const Achieves = () => {
  const { nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const nftComponents = ['nft1', 'nft2', 'nft3', 'nft4', 'nft5'];
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }
  return (
    <div className={styles.achievements}>
      <div className={styles.achieves__top}>
        <h2 className={styles.title}>Achieves</h2>
        {/* <ArrowRight className={styles.arrow__svg} /> */}
      </div>
      {WalletAddress && nftCount > 0 ? (
        <ul className={styles.box}>
          {nftComponents.slice(0, nftCount).map((item) => (
            <li key={item} className={styles.box__item}>
              <Image
                src={`/image/mininft/${item}.png`}
                alt="mininft"
                fill
                className={styles.nft}
                quality={95}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={styles.subtitle}>
          Complete journeys to earn XP and gain achievements.
        </h3>
      )}
    </div>
  );
};
