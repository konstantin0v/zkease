import styles from "./Badge.module.css";

export const Badge = ({
  type = "normal",
  appereance = "neutral",
  showIconLeft = false,
  showIconRight = false,
  IconLeft,
  IconRight,
  children,
  style,
}) => {
  const badgeClassName = `${styles.badge} ${styles[appereance]} ${styles[type]}`;

  return (
    <div className={badgeClassName} style={style}>
      {showIconLeft && (
        <span className={styles.iconLeft}>
          <IconLeft />
        </span>
      )}
      <span className={styles.badgeText}>{children}</span>
      {showIconRight && (
        <span className={styles.iconRight}>
          <IconRight />
        </span>
      )}
    </div>
  );
};

export default Badge;
