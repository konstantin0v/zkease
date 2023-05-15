import styles from './Badge.module.css';

export const Badge = ({
  type = 'normal',
  appereance = 'neutral',
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
      {showIconLeft && <IconLeft />}
      <span className={styles.badgeText}>{children}</span>
      {showIconRight && <IconRight />}
    </div>
  );
};
