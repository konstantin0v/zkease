import Layout from "@/layout/Layout";
import "@/styles/globals.css";
import { WagmiConfig, sepolia } from "wagmi";
import { chains, wagmiClient } from "../services/wagmiConfig";
import {
  RainbowKitProvider,
  AvatarComponent,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
//import { generateColorFromAddress } from './utils';
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { Provider } from "react-redux";
import { store, persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { zkSync } from "@wagmi/chains";

const CustomAvatar = ({ address }) => {
  return address ? (
    <Jazzicon diameter={80} seed={jsNumberForAddress(address)} />
  ) : (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 999,
        height: "80px",
        width: "80px",
      }}
    >
      no pic
    </div>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        initialChain={zkSync}
        avatar={CustomAvatar}
        theme={darkTheme({
          accentColor: "#626ee9",
        })}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
