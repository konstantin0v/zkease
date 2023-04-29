import styles from './Leaderboard.module.css';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { usersSelector } from '@/store/users/reducer';
export const Leaderboard = () => {
  const { users } = useSelector(usersSelector);

  return (
    <div className={styles.leaderboard}>
      <h2 className={styles.subtitle}>Leaderboard</h2>
      <ul className={styles.list}>
        {users &&
          users.map(({ address, exp }, index) => (
            <ul key={uuidv4()} className={styles.list__row}>
              <li className={styles.list__row__pos}>{++index}</li>
              <li className={styles.list__row__name}>
                <Jazzicon diameter={24} seed={jsNumberForAddress(address)} />
                <p className={styles.list__row__name__p}>
                  {address.slice(0, 5) + '...' + address.slice(38)}
                </p>
              </li>
              <li className={styles.list__row__xp}>{exp} XP</li>
            </ul>
          ))}
      </ul>
    </div>
  );
};
