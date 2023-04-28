import styles from './Button.module.css';

export const Button = ({
  type = 'primary',
  intent = 'normal',
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
        styles[size],
        styles[intent],
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
