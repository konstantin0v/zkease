import { ethers } from "ethers";
import { abiNFT } from "./abiNFT";
import { defaultProvider } from "./defaultProvider";

const nftContractAddress = "0x959be2F74a6100C05108674ba453ff7B78A0B4e8";
export const contract = new ethers.Contract(
  nftContractAddress,
  abiNFT,
  defaultProvider
);
