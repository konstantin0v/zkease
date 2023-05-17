import clsx from 'clsx';
import styles from './ModalMint.module.css';
import Image from 'next/image';
import { Button } from '@/components';
import { ethers } from 'ethers';
import { contract } from '@/web3/contractNFT';
import walletProvider from '@/web3/walletProvider';
import { handleMintNft } from '@/utils/handleMintNft';
import { setNfts, zkRecordSelector } from '@/store/zkRecord/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useAccount } from 'wagmi';
import { useState } from 'react';

export const ModalMint = ({ setModalActive }) => {
  const [loader, setLoader] = useState(false);
  const { address: WalletAddress } = useAccount();
  const dispatch = useDispatch();

  const { nfts } = useSelector(zkRecordSelector);
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
      setLoader(true);
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
    } finally {
      setModalActive(false);
      setLoader(false);
    }
  };

  return (
    <>
      <div className={styles.nft}>
        <Image
          src={`/image/nft/journey${
            nftCount + 1 === 4 ? 'End' : nftCount + 1
          }.png`}
          alt="nft"
          width={190}
          height={256}
        />
      </div>
      <div className={styles.modal}>
        <h2>Ready to claim your journey{nftCount + 1} NFT?</h2>
        <h3>You will gain access to the next journey.</h3>
        <Button width="full" loader={loader} onClick={handleNFT}>
          Claim NFT 0.0008 ETH
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