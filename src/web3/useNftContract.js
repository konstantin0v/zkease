import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abiNFT } from "./abiNFT";
import { defaultProvider } from "./defaultProvider";
import walletProvider from "./walletProvider";

const useNftContract = () => {
  const [contract, setContract] = useState(null);
  const [signedContract, setSignedContract] = useState(null);
  const address = "0x0B495069560Bb61be990D7764Ed1453180F077f4";
  useEffect(() => {
    const initializeContract = async () => {
      const contractInstance = new ethers.Contract(
        address,
        abiNFT,
        defaultProvider
      );

      const signer = await walletProvider.getSigner();
      const contractSignerInstance = contractInstance.connect(signer);

      setContract(contractInstance);
      setSignedContract(contractSignerInstance);
    };

    initializeContract();
  }, []);

  return { contract, signedContract };
};

export default useNftContract;
