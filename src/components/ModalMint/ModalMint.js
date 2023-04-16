import styles from "./ModalMint.module.css";
import Image from "next/image";
import { Button } from "@/components";
import { journeyInfo } from "@/consts/journeyInfo";
import useMintNft from "@/utils/useMintNft";

export const ModalMint = ({ setModalActive }) => {
  const { loader, handleNFT, nftCount } = useMintNft(setModalActive);

  return (
    <>
      <div className={styles.box}>
        <Image
          src={`/image/nft/journey${
            nftCount + 1 === 4 ? "End" : nftCount + 1
          }.png`}
          alt="nft"
          fill
          quality={95}
          className={styles.nft}
        />
      </div>
      <div className={styles.modal}>
        <h2>Unlock {journeyInfo[nftCount + 1]}!</h2>
        <h3>Mint an NFT to open the next Journey.</h3>
        <Button
          width="full"
          loader={loader}
          style={{ height: "52px" }}
          onClick={handleNFT}
        >
          <div className={styles.btntext}>
            Claim NFT <span className={styles.price}>0.0008 ETH</span>
          </div>
        </Button>
        <Button
          background="transparent"
          width="full"
          onClick={() => setModalActive(false)}
        >
          Maybe Later
        </Button>
      </div>
    </>
  );
};
