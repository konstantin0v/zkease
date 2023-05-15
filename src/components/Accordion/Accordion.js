import { useEffect, useState } from 'react';
import styles from './Accordion.module.css';
import { OpenerSvg, Status } from '@/components';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { zkRecordSelector } from '@/store/zkRecord/reducer';

export const Accordion = ({
  type,
  tasksByJourney,
  journey,
  path,
  children,
  step,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { storedTasks } = useSelector(zkRecordSelector);

  useEffect(() => {
    if (type === 'progress') {
      setIsActive(true);
    }
  }, []);

  return (
    <>
      <div className={clsx(styles.accord, isActive && styles.accord__active)}>
        <div
          className={clsx(styles.title, isActive && styles.title__active)}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {tasksByJourney && <Status type={type} />}
          {step && step}
          <OpenerSvg
            className={clsx(styles.arrow, isActive && styles.rotate)}
          />
        </div>
        <div
          className={clsx(styles.content, isActive && styles.content__active)}
        >
          {tasksByJourney &&
            Object.entries(tasksByJourney)
              .filter(([key, task]) => {
                if (type === 'progress') {
                  return key === path;
                } else if (type === 'todo') {
                  return storedTasks?.[journey]?.[key] === 0;
                } else {
                  return storedTasks?.[journey]?.[key] > 0;
                }
              })
              .map(([key, task]) => (
                <Link
                  key={key}
                  className={styles.links}
                  href={`/journeyPage/${journey}/${key}`}
                >
                  <Image
                    src={`/image/projects/${task.source.split('.')[0]}.svg`}
                    alt="project"
                    width={20}
                    height={20}
                    className={styles.img}
                  />
                  {task.title}
                </Link>
              ))}
          {children}
        </div>
      </div>
    </>
  );
};
