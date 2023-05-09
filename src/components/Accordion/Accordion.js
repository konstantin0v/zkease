import { useState } from 'react';
import styles from './Accordion.module.css';
import { CloserSvg, GuideSvg, OpenerSvg } from '@/components';
import clsx from 'clsx';

const Accordion = ({ content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={clsx(styles.accord, isActive && styles.accord__active)}>
      <div
        className={clsx(styles.title, isActive && styles.title__active)}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className={styles.title__left}>
          <GuideSvg />
          <p className={styles.title__text}>Guide</p>
        </div>
        {isActive ? <CloserSvg /> : <OpenerSvg />}
      </div>
      <div className={clsx(styles.content, isActive && styles.content__active)}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
