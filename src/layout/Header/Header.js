import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { XpSvg } from "@/components";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";

const Header = ({ ...props }) => {
  const { exp } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();

  return (
    <header {...props}>
      <ul className={styles.top__menu}>
        <li>
          <Link href="/" className={styles.logo}>
            <Image
              src="/image/1.svg"
              alt="zkEasy logo"
              width={119}
              height={19}
              className={styles.logo__img}
            />
          </Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/">Achieves</Link>
        </li>
        <li>
          <Link href="/">Leaderbord</Link>
        </li> */}
      </ul>
      <div className={styles.right}>
        {WalletAddress && (
          <div className={styles.exp}>
            <XpSvg />
            <span>{exp}</span>
            <p>EXP</p>
          </div>
        )}
        <ConnectButton
          label="Connect wallet"
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
