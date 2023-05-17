import clsx from 'clsx';
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
  color = '',
}) => {
  const badgeClassName = `${styles.badge} ${styles[appereance]} ${styles[type]}`;
  return (
    <div className={badgeClassName} style={style}>
      {showIconLeft && <IconLeft className={clsx(color && styles[color])} />}
      <span className={styles.badgeText}>{children}</span>
      {showIconRight && <IconRight className={clsx(styles[color])} />}
    </div>
  );
};
