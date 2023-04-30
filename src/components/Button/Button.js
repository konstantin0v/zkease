import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({
  type = 'primary',
  intent = 'primary',
  size = 'medium',
  showIconLeft = false,
  showIconRight = false,
  IconLeft,
  IconRight,
  disabled = false,
  children,
  onClick,
  style,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        styles[intent],
        styles[size],
        disabled && styles.disabled,
        styles.buttonContainer
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {showIconLeft && (
        <span className={styles.iconLeft}>
          <IconLeft />
        </span>
      )}
      <span className={styles.buttonText}>{children}</span>
      {showIconRight && (
        <span className={styles.iconRight}>
          <IconRight />
        </span>
      )}
    </button>
  );
};

export default Button;
