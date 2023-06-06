import { ethers } from "ethers";

//export const defaultProvider = new ethers.providers.InfuraProvider("sepolia");
export const defaultProvider = new ethers.providers.JsonRpcProvider(
  "https://testnet.era.zksync.dev"
  // 'https://mainnet.era.zksync.io'
);
