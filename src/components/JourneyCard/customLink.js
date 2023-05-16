import { useState } from 'react';
import styles from './JourneyCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { ModalWindow, Button } from '@/components';

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
          <Image
            src={`/image/nft/${journeyName}.png`}
            alt="nft"
            width={190}
            height={256}
          />
        </div>
        <div className={styles.modal}>
          {!haveExpToNewLvl ? (
            <>
              <h2>{journeyName} required</h2>
              <h3>
                To access {journeyName} , you must own the “{journeyName}” and
                reach 2 level
              </h3>
              <Button width="full" onClick={() => setModalActive(false)}>
                Close
              </Button>
            </>
          ) : (
            <>
              <h2>Access to {journeyName}</h2>
              <h3>
                To access {journeyName}, you must own the `{journeyName}`
              </h3>
              <Button width="full" onClick={() => setModalActive2(true)}>
                Go to Claim
              </Button>
              <Button
                background="transparent"
                width="full"
                onClick={() => setModalActive(false)}
              >
                Maybe Later
              </Button>
            </>
          )}
        </div>
      </ModalWindow>
      <ModalWindow active={modalActive2} setActive={setModalActive2}>
        <div className={styles.nft}>
          <Image
            src={`/image/nft/${journeyName}.png`}
            alt="nft"
            width={190}
            height={256}
          />
        </div>
        <div className={styles.modal}>
          <h2>Ready to claim your {journeyName} NFT?</h2>
          <h3>You will gain access to the next journey.</h3>
          <Button width="full">Claim NFT 0.0008 ETH</Button>
          <Button
            background="transparent"
            width="full"
            onClick={() => setModalActive2(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
    </>
  );
};
