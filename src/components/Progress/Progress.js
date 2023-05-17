import { useDispatch, useSelector } from 'react-redux';
import styles from './Progress.module.css';
import { useAccount } from 'wagmi';
import { zkRecordSelector } from '@/store/zkRecord/reducer';
import ProgressBar from '@ramonak/react-progress-bar';
import { ArrowRight, Button, ModalMint, ModalWindow } from '@/components';
import { useState } from 'react';

export const Progress = () => {
  const [modalActive, setModalActive] = useState(false);

  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const needExp = { 0: 10, 1: 70, 2: 400, 3: 950, 4: 9999 };
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  return (
    <div className={styles.progress}>
      <div className={styles.progress__top}>
        <h2 className={styles.title}>My progress</h2>
        {/* <ArrowRight className={styles.arrow__svg} /> */}
      </div>
      {WalletAddress ? (
        <>
          <div className={styles.info}>
            <p>Lvl {nftCount}</p>
            <p>
              XP {exp} / {needExp[nftCount]}
            </p>
          </div>
          <ProgressBar
            bgColor="#626EE9"
            baseBgColor="#F7F7F71A"
            height="4px"
            borderRadius="8px"
            customLabel=" "
            completed={(exp / needExp[nftCount]) * 100}
            className={styles.bar}
          />
          {exp >= needExp[nftCount] && (
            <Button width="full" onClick={() => setModalActive(true)}>
              Claim Reward
            </Button>
          )}
        </>
      ) : (
        <h3 className={styles.subtitle}>Connect wallet to see your level</h3>
      )}
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <ModalMint setModalActive={setModalActive} />
      </ModalWindow>
    </div>
  );
};
