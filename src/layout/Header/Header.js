import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Header = ({ ...props }) => {
  return (
    <header {...props}>
      <Link href="/" className={styles.link}>
        <Image
          src="/image/logo.svg"
          alt="zkEasy logo"
          width={20}
          height={20}
          className={styles.link__logo}
        />
        <h1 className={styles.link_text}>zkEasy</h1>
      </Link>
      <ul className={styles.nav}>
        <li>
          <Link href="/" className={styles.nav__link}>
            Learn
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.nav__link}>
            Community
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.nav__link}>
            About
          </Link>
        </li>
      </ul>
      <div className={styles.btn}>
      <ConnectButton 
      label="Sign in"
     // accountStatus="address"
      chainStatus="none"
      showBalance={{
        smallScreen: false,
        largeScreen: true,
      }}
      />
            </div>
    </header>
  );
};

export default Header;

