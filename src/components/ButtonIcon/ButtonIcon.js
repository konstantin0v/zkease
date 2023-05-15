import clsx from 'clsx';
import styles from '../Button/Button.module.css';
import stylesIcon from './ButtonIcon.module.css';

export const ButtonIcon = ({
  type = 'primary',
  intent = 'normal',
  size = 'medium',
  Icon,
  disabled = false,
  onClick,
  style,
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        stylesIcon[size],
        styles[intent],
        disabled && styles.disabled,
        styles.buttonContainer
      )}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <Icon />
    </button>
  );
};
