import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  arbitrum,
  arbitrumGoerli,
  arbitrumNova,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  canto,
  celo,
  celoAlfajores,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  hardhat,
  iotex,
  iotexTestnet,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  sepolia,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  zkSync,
  zkSyncTestnet,
} from "wagmi/chains";

// export const { chains, provider } = configureChains([
//     arbitrum, arbitrumGoerli, arbitrumNova, aurora, auroraTestnet, avalanche, avalancheFuji, bronos, bronosTestnet, bsc, bscTestnet,
//     canto, celo, celoAlfajores, fantom, fantomTestnet, foundry, goerli, hardhat, iotex, iotexTestnet, localhost, mainnet, metis, metisGoerli,
//     moonbaseAlpha, moonbeam, moonriver, okc, optimism, optimismGoerli, polygon, polygonMumbai, skaleBlockBrawlers,skaleCalypso,
//     skaleCalypsoTestnet, skaleChaosTestnet, skaleCryptoBlades, skaleCryptoColosseum, skaleEuropa, skaleEuropaTestnet, skaleExorde, skaleHumanProtocol,
//     skaleNebula, skaleNebulaTestnet, skaleRazor, skaleTitan, skaleTitanTestnet, sepolia, taraxa, taraxaTestnet, telos, telosTestnet, zkSync,zkSyncTestnet
//   ],
//   [
//     publicProvider()
//   ]
// );

export const { chains, provider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zkSync,
    zkSyncTestnet,
    goerli,
    sepolia,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "zkeasy",
  projectId: "9631ee9db5f0bbc574d5baf853aff699",
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
