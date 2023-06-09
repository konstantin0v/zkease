import styles from "./Leaderboard.module.css";
import { useSelector } from "react-redux";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { usersSelector } from "@/store/users/reducer";
import { useAccount } from "wagmi";
import clsx from "clsx";
import { XpSvg } from "@/components";
import { v4 as uuidv4 } from "uuid";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
export const Leaderboard = () => {
  const { address: walletAddress } = useAccount();
  const { users, allUsers } = useSelector(usersSelector);
  const { exp } = useSelector(zkRecordSelector);
  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.subtitle}>Leaderboard</h2>
      <ul className={styles.list}>
        {users &&
          users.map(({ address, exp }, index) => (
            <ul
              key={uuidv4()}
              className={clsx(
                styles.row,
                walletAddress === address && styles.row__wallet
              )}
            >
              <li className={styles.row__pos}>{++index}</li>
              <li className={styles.row__name}>
                <Jazzicon diameter={24} seed={jsNumberForAddress(address)} />
                <p className={styles.row__name__p}>
                  {address.slice(0, 5) + "..." + address.slice(38)}
                </p>
              </li>
              <li className={styles.row__xp}>
                <span className={styles.row__xp_span}>{exp}</span>
                <XpSvg
                  className={clsx(
                    styles.row__xpsvg,
                    walletAddress === address && styles.xpsvg
                  )}
                />
              </li>
            </ul>
          ))}
      </ul>
      {walletAddress &&
        !users?.some((user) => user.address === walletAddress) && (
          <ul
            key={uuidv4()}
            className={clsx(styles.row, styles.row__wallet, styles.walletfix)}
          >
            <li className={styles.row__pos}>
              {(allUsers &&
                allUsers.findIndex((i) => i === walletAddress) + 1) ||
                " "}
            </li>
            <li className={styles.row__name}>
              <Jazzicon
                diameter={24}
                seed={jsNumberForAddress(walletAddress)}
              />
              <p className={styles.row__name__p}>
                {walletAddress.slice(0, 5) + "..." + walletAddress.slice(38)}
              </p>
            </li>
            <li className={styles.row__xp}>
              {exp}
              <XpSvg className={clsx(styles.row__xpsvg, styles.xpsvg)} />
            </li>
          </ul>
        )}
    </div>
  );
};
