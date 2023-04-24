import styles from "../Button/Button.module.css";
import stylesIcon from "./ButtonIcon.module.css";

export const ButtonIcon = ({
  type = "primary",
  intent = "normal",
  size = "medium",
  Icon,
  disabled = false,
  onClick,
  style,
}) => {
  const buttonClassName = `${styles.button} ${styles[type]} ${
    stylesIcon[size]
  } ${styles[intent]} ${disabled ? styles.disabled : ""}`;
  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <div className={styles.buttonContainer}>
        <Icon />
      </div>
    </button>
  );
};

export default ButtonIcon;
