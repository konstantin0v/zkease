import clsx from "clsx";
import styles from "./Notification.module.css";

export const Notification = ({
  disabled = false,
  onClick,
  className,
  style,
  type,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.notif, type && styles[type])}
      style={style}
      {...rest}
    >
      {type === "error" && <div>Failed to verify your activity</div>}
      {type === "success" && <div>Verification was successful</div>}
    </div>
  );
};
