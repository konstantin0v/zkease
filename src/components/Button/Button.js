import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({
  disabled = false,
  onClick,
  className,
  style,
  children,
  error,
  w100,
  transparent,
  loader,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[error],
        styles[transparent],
        styles[w100],
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {loader ? <span>loading...</span> : children}
    </button>
  );
};
