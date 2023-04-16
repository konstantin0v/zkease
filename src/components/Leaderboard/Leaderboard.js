import styles from "./Leaderboard.module.css";

export const Leaderboard = () => {
  const guys = [
    {
      id: 1,
      name: "pups",
      xp: 100,
    },
    {
      id: 2,
      name: "sups",
      xp: 300,
    },
    {
      id: 3,
      name: "trups",
      xp: 200,
    },
    {
      id: 4,
      name: "ups",
      xp: 42,
    },
    {
      id: 5,
      name: "sup",
      xp: 66,
    },
    {
      id: 6,
      name: "psup",
      xp: 66,
    },
    {
      id: 7,
      name: "mops",
      xp: 66,
    },
  ];

  const sort = guys.sort((a, b) => b.xp - a.xp);
  const top = sort.slice(0, 7);

  return (
    <div className={styles.leaderboard}>
      <h3 className={styles.subtitle}>Leaderboard</h3>
      <ul className={styles.list}>
        {top.map((guy, index) => (
          <ul key={guy.id} className={styles.list__row}>
            <li key={`position-${guy.id}`}>{++index}</li>
            <li key={`name-${guy.id}`} className={styles.list__row__name}>
              {guy.name}
            </li>
            <li key={`xp-${guy.id}`} className={styles.list__row__xp}>
              {guy.xp} XP
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
};
