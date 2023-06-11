import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { abiNFT } from "./abiNFT";
import { defaultProvider } from "./defaultProvider";
import walletProvider from "./walletProvider";

const useNftContract = () => {
  const [contract, setContract] = useState(null);
  const [signedContract, setSignedContract] = useState(null);
  const address = "0x33Df2c97BF96A845FCE52884c726235d5efe5076";
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
