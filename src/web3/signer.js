import walletProvider from "./walletProvider";

export const connectSigner = async (contract) => {
  const signer = await walletProvider.getSigner();
  return contract.connect(signer);
};
