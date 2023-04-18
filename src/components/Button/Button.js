import styles from "./Button.module.css";

export const Button = ({
  type = "primary",
  intent = "normal",
  size = "medium",
  showIconLeft = false,
  showIconRight = false,
  IconLeft,
  IconRight,
  disabled = false,
  children,
  onClick,
  style,
}) => {
  const buttonClassName = `${styles.button} ${styles[type]} ${styles[size]} ${
    styles[intent]
  } ${disabled ? styles.disabled : ""}`;
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <div className={styles.buttonTextContainer}>
        {showIconLeft && (
          <span className={styles.iconLeft}>
            <IconLeft />
          </span>
        )}
        {children}
        {showIconRight && (
          <span className={styles.iconRight}>
            <IconRight />
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;
