import { useDispatch, useSelector } from "react-redux";
import styles from "./Progress.module.css";
import { useAccount } from "wagmi";
import { setNfts, zkRecordSelector } from "@/store/zkRecord/reducer";
import ProgressBar from "@ramonak/react-progress-bar";
import Button from "../Button/Button";
import { ethers } from "ethers";
import { contract } from "@/web3/contractNFT";
import walletProvider from "@/web3/walletProvider";
import { handleMintNft } from "@/utils/handleMintNft";

const Progress = ({ journey }) => {
  const { exp, nfts } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const dispatch = useDispatch();
  const needExp = { 0: 10, 1: 70, 2: 400, 3: 950, 4: 1170 };
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }
  const getContractWithSigner = async () => {
    const signer = await walletProvider.getSigner();
    return contract.connect(signer);
  };
  const handleNFT = async () => {
    try {
      const level = nftCount + 1;
      const journeyName = nftCount === 4 ? "journeyEnd" : `journey${nftCount}`;
      const contractWithSigner = await getContractWithSigner(contract);
      const tx = await contractWithSigner.mintNFT(level, {
        value: ethers.utils.parseEther("0.001"),
      });
      await tx.wait();
      await handleMintNft(WalletAddress, journeyName, setNfts, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.progress}>
      <h2 className={styles.title}>My progress</h2>
      {WalletAddress ? (
        <>
          <div className={styles.info}>
            <p>Lvl {nftCount}</p>
            <p>
              XP {exp} / {needExp[nftCount]}
            </p>
          </div>
          <ProgressBar
            bgColor="#155EE6"
            baseBgColor="#F7F7F71A"
            height="4px"
            borderRadius="8px"
            customLabel=" "
            completed={(exp / needExp[nftCount]) * 100}
          />
          {exp >= needExp[nftCount] && (
            <Button
              type="intent-primary"
              intent="primary"
              size="medium"
              style={{ marginTop: "12px" }}
              onClick={handleNFT}
            >
              Level Up
            </Button>
          )}
        </>
      ) : (
        <h3 className={styles.subtitle}>Connect wallet to see your level</h3>
      )}
    </div>
  );
};

export default Progress;
