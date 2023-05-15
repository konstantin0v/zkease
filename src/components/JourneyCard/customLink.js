import { useState } from 'react';
import styles from './JourneyCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { ModalWindow } from '@/components/ModalWindow/ModalWindow';

export const CustomLink = ({ href, disabled, journeyName, children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const haveExpToNewLvl = true;
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
        <div className={styles.nft}>
          <Image src={`/image/nfts/${journeyName}.png`} alt="nft" fill={true} />
        </div>
        <div className={styles.modal}>
          {haveExpToNewLvl ? (
            <>
              <h2>{journeyName} required</h2>
              <h3>
                To access {journeyName} , you must own the “{journeyName}” and
                reach 2 level
              </h3>
              <Button w100="w100" onClick={() => setModalActive(false)}>
                Close
              </Button>
            </>
          ) : (
            <>
              <h2>Access to{journeyName}</h2>
              <h3>
                To access {journeyName}, you must own the “{journeyName}”
              </h3>
              <Button w100="w100" onClick={() => setModalActive2(true)}>
                Go to Claim
              </Button>
              <Button
                transparent="transparent"
                w100="w100"
                onClick={() => setModalActive(false)}
              >
                Maybe Later
              </Button>
            </>
          )}
        </div>
      </ModalWindow>
      {/* МОДАЛКА МИНТА */}
      <ModalWindow active={modalActive2} setActive={setModalActive2}>
        <div className={styles.nft}>
          <Image src={`/image/nfts/${journeyName}.png`} alt="nft" fill={true} />
        </div>
        <div className={styles.modal}>
          <h2>Ready to claim your Level 02 NFT?</h2>
          <h3>You will gain access to the next journey.</h3>
          <Button w100="w100">Claim NFT 0.0008 ETH</Button>
          <Button
            transparent="transparent"
            w100="w100"
            onClick={() => setModalActive2(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
    </>
  );
};
