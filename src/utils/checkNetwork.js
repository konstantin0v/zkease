import walletProvider from "@/web3/walletProvider";

export const checkNetwork = async () => {
  const zkSyncEraMainnetChainId = 324;
  const zkSyncEraMainnetChainIdHex = `0x144`;

  const zkSyncEraMainnetChainObject = {
    chainId: zkSyncEraMainnetChainIdHex,
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

  if (network.chainId !== zkSyncEraMainnetChainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: zkSyncEraMainnetChainIdHex }],
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
