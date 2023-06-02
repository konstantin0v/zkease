import clsx from "clsx";
import styles from "./ModalMint.module.css";
import Image from "next/image";
import { Button } from "@/components";
import { ethers } from "ethers";
import { contract } from "@/web3/contractNFT";
import walletProvider from "@/web3/walletProvider";
import { handleMintNft } from "@/utils/handleMintNft";
import { setNfts, zkRecordSelector } from "@/store/zkRecord/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { useState } from "react";
import { checkNetwork } from "@/utils/checkNetwork";
import useNftContract from "@/web3/useNftContract";
import { journeyInfo } from "@/consts/journeyInfo";

export const ModalMint = ({ setModalActive }) => {
  const [loader, setLoader] = useState(false);
  const { address: walletAddress } = useAccount();
  const dispatch = useDispatch();

  const { nfts } = useSelector(zkRecordSelector);
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  const { signedContract } = useNftContract();
  const handleNFT = async () => {
    try {
      setLoader(true);
      //await checkNetwork();
      const level = nftCount + 1;
      const journeyName = nftCount === 4 ? "journeyEnd" : `journey${nftCount}`;
      const valueNFT =
        level === 1
          ? ethers.utils.parseEther("0.0018")
          : ethers.utils.parseEther("0.0008");
      const tx = await signedContract.mintNFT(level, {
        value: valueNFT,
      });
      await tx.wait();
      await handleMintNft(walletAddress, journeyName, setNfts, dispatch);
    } catch (error) {
      console.log(error);
    } finally {
      setModalActive(false);
      setLoader(false);
    }
  };

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
