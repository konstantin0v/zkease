import styles from './ModalWindow.module.css';
import clsx from 'clsx';

export const ModalWindow = ({ active, setActive, children }) => {
  return (
    <div
      className={clsx(styles.modal, active && styles.active)}
      onClick={() => setActive(false)}
    >
      <div
        className={clsx(styles.modal__content, active && styles.active)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
