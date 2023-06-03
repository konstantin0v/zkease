import clsx from "clsx";
import styles from "./Notification.module.css";
import { Button, Close, Error, Success } from "@/components";

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
      className={clsx(styles.notif, type && styles[type])}
      style={style}
      {...rest}
    >
      {type === "error" && (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Error />
            <Button text="svg" onClick={onClick}>
              <Close />
            </Button>
          </div>
          <h3>Failed to verify your activity</h3>
          <h4>
            You need at least one transaction through this project. Try again
          </h4>
        </div>
      )}
      {type === "success" && (
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Success />
            <Button text="svg" onClick={onClick}>
              <Close />
            </Button>
          </div>
          <h3>Verification was successful</h3>
          <h4>
            Now you can move on to the next task or go through this task again
          </h4>
        </div>
      )}
    </div>
  );
};
