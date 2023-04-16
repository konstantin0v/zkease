import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = ({ ...props }) => {
  return (
    <div {...props}>
      <header className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/image/logo.svg"
            alt="zkEasy logo"
            width={20}
            height={20}
            className={styles.logo__img}
          />
          <h1 className={styles.logo__text}>zkEasy</h1>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.menu__link}>
              Learn
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.menu__link}>
              Community
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.menu__link}>
              About
            </Link>
          </li>
        </ul>
        <div className={styles.button}>
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
    </div>
  );
};

export default Header;
