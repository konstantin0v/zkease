import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = ({
  disabled = false,
  onClick,
  className,
  style,
  children,
  type = '',
  width = '',
  background = '',
  text = '',
  loader = false,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        type && styles[type],
        background && styles[background],
        width && styles[width],
        text && styles[text],
        disabled && styles.disabled
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...rest}
    >
      {loader ? <div className={styles.loader}></div> : children}
    </button>
  );
};
