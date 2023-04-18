import styles from "./Leaderboard.module.css";
import { zkRecordSelector } from '../../store/zkRecord/reducer';
import { useSelector } from 'react-redux';
import { v4 as uuidv4  } from 'uuid';
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
export const Leaderboard = () => {
  const { bestPerformers } = useSelector(zkRecordSelector);

  return (
    <div className={styles.leaderboard}>
      <h3 className={styles.subtitle}>Leaderboard</h3>
      <ul className={styles.list}>
        {bestPerformers.map(({address, exp}) => (
          <ul key={uuidv4()} className={styles.list__row}>
            <li className={styles.list__row__name}>
            <Jazzicon diameter={30} seed={jsNumberForAddress(address)} />
            {address.slice(0, 5) +"..." +address.slice(38)}
            </li>
            <li className={styles.list__row__xp}>
              {exp} XP
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};
