import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/image/logo.svg"
          alt="zkEasy logo"
          width={20}
          height={20}
          className={styles.logo__img}
        />
        <h1 className={styles.logo__text}>zkEase</h1>
      </Link>
      <ConnectButton
        label="Sign in"
        // accountStatus="address"
        chainStatus="none"
        showBalance={{
          smallScreen: false,
          largeScreen: true,
        }}
      />
    </header>
  );
};

export default Header;
