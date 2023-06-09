import { useState } from "react";
import { ethers } from "ethers";
import { handleMintNft } from "@/utils/handleMintNft";
import { setNfts, zkRecordSelector } from "@/store/zkRecord/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { checkNetwork } from "@/utils/checkNetwork";
import useNftContract from "@/web3/useNftContract";
import { initialDataSelector } from "@/store/initialData/reducer";

const useMintNft = (setModalActive) => {
  const [loader, setLoader] = useState(false);
  const { address: walletAddress } = useAccount();
  const dispatch = useDispatch();

  const { nfts, jwt } = useSelector(zkRecordSelector);
  const { nftPrice, firstNftPrice } = useSelector(initialDataSelector);
  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }

  const { signedContract } = useNftContract();
  const handleNFT = async () => {
    try {
      setLoader(true);
      await checkNetwork();
      const level = nftCount + 1;
      const journeyName = nftCount === 4 ? "journeyEnd" : `journey${nftCount}`;
      const valueNFT = level === 1 ? firstNftPrice : nftPrice;
      const tx = await signedContract.mintNFT(level, {
        value: valueNFT,
      });
      await tx.wait();
      await handleMintNft(walletAddress, journeyName, setNfts, dispatch, jwt);
    } catch (error) {
      console.log(error);
    } finally {
      setModalActive(false);
      setLoader(false);
    }
  };

  return {
    loader,
    handleNFT,
    nftCount,
  };
};

export default useMintNft;
