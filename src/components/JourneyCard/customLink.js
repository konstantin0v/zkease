import { useState } from "react";
import styles from "./journeyCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ModalWindow, Button, ModalMint } from "@/components";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";

export const CustomLink = ({
  href,
  disabled,
  journeyName,
  children,
  needExp,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const { exp, nfts } = useSelector(zkRecordSelector);
  let nftCount = 0;

  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  let haveExpToNewLvl = 0;

  if (exp >= needExp[nftCount]) {
    haveExpToNewLvl = 1;
  }
  let nextJourney =
    nftCount + 1 === 4 ? "journeyEnd" : `journey${nftCount + 1}`;

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
            <div className={styles.nft}>
              <Image
                src={`/image/nft/${journeyName}.png`}
                alt="nft"
                width={190}
                height={256}
                quality={96}
              />
            </div>
            <div className={styles.modal}>
              <h2>{journeyName} required</h2>
              <h3>
                To access {journeyName} , you must own the “{journeyName}” and
                reach 2 level
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
