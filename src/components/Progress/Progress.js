import { useDispatch, useSelector } from 'react-redux';
import styles from './Progress.module.css';
import { useAccount } from 'wagmi';
import { setNfts, zkRecordSelector } from '@/store/zkRecord/reducer';
import ProgressBar from '@ramonak/react-progress-bar';
import { ethers } from 'ethers';
import { contract } from '@/web3/contractNFT';
import walletProvider from '@/web3/walletProvider';
import { handleMintNft } from '@/utils/handleMintNft';
import { ArrowRight, Button, ModalWindow } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export const Progress = () => {
  const [modalActive, setModalActive] = useState(false);
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
      const journeyName = nftCount === 4 ? 'journeyEnd' : `journey${nftCount}`;
      const contractWithSigner = await getContractWithSigner(contract);
      const tx = await contractWithSigner.mintNFT(level, {
        value: ethers.utils.parseEther('0.001'),
      });
      await tx.wait();
      await handleMintNft(WalletAddress, journeyName, setNfts, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.progress}>
      <div className={styles.progress__top}>
        <h2 className={styles.title}>My progress</h2>
        <ArrowRight className={styles.arrow__svg} />
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
            <Button w100="w100" onClick={() => setModalActive(true)}>
              Claim Reward
            </Button>
          )}
        </>
      ) : (
        <h3 className={styles.subtitle}>Connect wallet to see your level</h3>
      )}
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.nft}>
          <Image
            src={`/image/nfts/journey${nftCount}.png`}
            alt="nft"
            fill={true}
          />
        </div>
        <div className={styles.modal}>
          <h2>Ready to claim your Level 02 NFT?</h2>
          <h3>You will gain access to the next journey.</h3>
          <Button w100="w100">Claim NFT 0.0008 ETH</Button>
          <Button
            transparent="transparent"
            w100="w100"
            onClick={() => setModalActive(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
    </div>
  );
};
