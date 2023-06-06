import walletProvider from "@/web3/walletProvider";

export const checkNetwork = async () => {
  const zkSyncEraMainnetChainObject = {
    chainId: `0x144`,
    chainName: "zkSync Era Mainnet",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://mainnet.era.zksync.io"],
    blockExplorerUrls: ["https://explorer.zksync.io/"],
  };

  const network = await walletProvider.getNetwork();

  if (network.chainId !== 324) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x144` }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [zkSyncEraMainnetChainObject],
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error(error);
      }
    }
  }
};
