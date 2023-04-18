import styles from "./Leaderboard.module.css";
import { zkRecordSelector } from '../../store/zkRecord/reducer';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

export const Leaderboard = () => {
  const { bestPerformers } = useSelector(zkRecordSelector);
  // const guys = [
  //   {
  //     id: 1,
  //     name: "pups",
  //     xp: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "sups",
  //     xp: 300,
  //   },
  //   {
  //     id: 3,
  //     name: "trups",
  //     xp: 200,
  //   },
  //   {
  //     id: 4,
  //     name: "ups",
  //     xp: 42,
  //   },
  //   {
  //     id: 5,
  //     name: "sup",
  //     xp: 66,
  //   },
  //   {
  //     id: 6,
  //     name: "psup",
  //     xp: 66,
  //   },
  //   {
  //     id: 7,
  //     name: "mops",
  //     xp: 66,
  //   },
  // ];

  // const sort = guys.sort((a, b) => b.xp - a.xp);
  // const top = sort.slice(0, 7);

  return (
    <div className={styles.leaderboard}>
      <h3 className={styles.subtitle}>Leaderboard</h3>
      <ul className={styles.list}>
        {bestPerformers.map(({address, exp}) => (
          <ul key={uuid()} className={styles.list__row}>
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
