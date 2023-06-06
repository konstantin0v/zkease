import { useState } from 'react';
import styles from './journeyCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ModalWindow, Button, ModalMint } from '@/components';
import { useSelector } from 'react-redux';
import { zkRecordSelector } from '@/store/zkRecord/reducer';

export const CustomLink = ({
  href,
  disabled,
  journeyName,
  children,
  needExp,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const { exp, nfts } = useSelector(zkRecordSelector);
  const journeyInfo = {
    journey1: 'Journey One',
    journey2: 'Journey Two',
    journey3: 'Journey Three',
    journeyEnd: 'Journey End',
  };
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  let haveExpToNewLvl = 0;

  if (exp >= needExp[nftCount]) {
    haveExpToNewLvl = 1;
  }
  let nextJourney =
    nftCount + 1 === 4 ? 'journeyEnd' : `journey${nftCount + 1}`;
  return (
    <>
      {disabled ? (
        <div className={styles.card} onClick={() => setModalActive(true)}>
          {children}
        </div>
      ) : (
        <Link className={styles.card} href={href}>
          {children}
        </Link>
      )}

      <ModalWindow active={modalActive} setActive={setModalActive}>
        {haveExpToNewLvl && journeyName === nextJourney ? (
          <ModalMint setModalActive={setModalActive} />
        ) : (
          <>
            <div className={styles.box}>
              <Image
                src={`/image/nft/${journeyName}.png`}
                alt="nft"
                fill
                quality={95}
                className={styles.nft}
              />
            </div>
            <div className={styles.modal}>
              <h2>{journeyInfo[journeyName]} NFT required</h2>
              <h3>
                To access {journeyInfo[journeyName]}, you need to own the “
                {journeyInfo[journeyName]} NFT”.
                <br />
                Gain enough XP from tasks in previous journney and mint the NFT
                to level up!
              </h3>
              <Button width="full" onClick={() => setModalActive(false)}>
                Close
              </Button>
            </div>
          </>
        )}
      </ModalWindow>
    </>
  );
};
