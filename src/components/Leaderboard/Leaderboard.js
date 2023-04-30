import styles from './Leaderboard.module.css';
import { useSelector } from 'react-redux';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { usersSelector } from '@/store/users/reducer';
import { useAccount } from 'wagmi';
import clsx from 'clsx';
import { XpSvg } from '@/components';
import { v4 as uuidv4 } from 'uuid';
export const Leaderboard = () => {
  const { users } = useSelector(usersSelector);
  const { address: WalletAddress } = useAccount();
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
                WalletAddress === address && styles.row__wallet
              )}
            >
              <li className={styles.row__pos}>{++index}</li>
              <li className={styles.row__name}>
                <Jazzicon diameter={24} seed={jsNumberForAddress(address)} />
                <p className={styles.row__name__p}>
                  {address.slice(0, 5) + '...' + address.slice(38)}
                </p>
              </li>
              <li className={styles.row__xp}>
                {exp}
                <XpSvg
                  className={clsx(
                    styles.row__xpsvg,
                    WalletAddress === address && styles.xpsvg
                  )}
                />
              </li>
            </ul>
          ))}
      </ul>
      {WalletAddress &&
        !users?.some((user) => user.address === WalletAddress) && (
          <ul
            key={uuidv4()}
            className={clsx(styles.row, styles.row__wallet, styles.walletfix)}
          >
            <li className={styles.row__pos}>i</li>
            <li className={styles.row__name}>
              <Jazzicon
                diameter={24}
                seed={jsNumberForAddress(WalletAddress)}
              />
              <p className={styles.row__name__p}>
                {WalletAddress.slice(0, 5) + '...' + WalletAddress.slice(38)}
              </p>
            </li>
            <li className={styles.row__xp}>
              exp
              <XpSvg className={clsx(styles.row__xpsvg, styles.xpsvg)} />
            </li>
          </ul>
        )}
    </div>
  );
};
