import { useState } from 'react';
import styles from './Accordion.module.css';
import { motion } from 'framer-motion';
import { CloserSvg, GuideSvg, OpenerSvg } from '@/components';
import clsx from 'clsx';

const Accordion = ({
  accordionData = {
    title: `Guide`,
    content: `Connect Wallet
    The first step is to connect your cryptocurrency wallet to mute.io. You can do this by clicking the "Connect Wallet" button on the mute.io website and selecting your preferred wallet provider. Supported wallets include MetaMask, WalletConnect, and Coinbase Wallet.
    Choose zkSync Era network
    After you've connected your wallet, you'll need to select the zkSync Era network. This is a layer-2 scaling solution that enables faster and cheaper transactions compared to the Ethereum mainnet. To switch to the zkSync Era network, click the network dropdown menu in your wallet and select "zkSync Era".
    Choose token
    Next, you'll need to choose the token you want to swap. You can select from a range of popular ERC-20 tokens, including ETH, USDC, DAI, and others. To choose a token, click the "Select Token" button on the mute.io swap page and search for the token you want.
    Swap
    Finally, you can initiate the swap by entering the amount of the token you want to exchange and clicking the "Swap" button. You'll be asked to confirm the transaction in your wallet, and once confirmed, the swap will be processed on the zkSync Era network. The exchanged tokens will then appear in your wallet.`,
  },
}) => {
  const [isActive, setIsActive] = useState(false);

  const { title, content } = accordionData;

  return (
    <>
      <div
        className={clsx(styles.title, isActive && styles.title__active)}
        onClick={() => setIsActive(!isActive)}
      >
        <div className={styles.top}>
          <GuideSvg />
          <div className={styles.titleText}>{title}</div>
        </div>
        {isActive ? <CloserSvg /> : <OpenerSvg />}
      </div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, delay: 0.3 }}
          className={styles.accordionContent}
        >
          {content}
        </motion.div>
      )}
    </>
  );
};

export default Accordion;
