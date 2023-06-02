import { ethers } from "ethers";
import { abiNFT } from "./abiNFT";
import { defaultProvider } from "./defaultProvider";

//const nftContractAddress = "0x959be2F74a6100C05108674ba453ff7B78A0B4e8"; - version on Sepolia
const nftContractAddress = "0x0B495069560Bb61be990D7764Ed1453180F077f4";
export const contract = new ethers.Contract(
  nftContractAddress,
  abiNFT,
  defaultProvider
);
