import styles from './TaskSection.module.css';
import {
  Accordion,
  ArrowRight,
  Badge,
  Button,
  ModalMint,
  ModalWindow,
  Notification,
  ProjectName,
  Status,
  XpSvg,
} from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const TaskSection = ({
  storedTasks,
  initialData,
  journey,
  taskName,
  countOfEfforts,
  handleVerify,
  handleVerifyTEST,
  WalletAddress,
  notif,
  setNotif,
  loader,
  exp,
  nfts,
  needExp,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    setNotif('');
  }, [taskName]);

  const countForStatusVeryf = storedTasks?.[journey]?.[taskName];
  const steps = initialData?.[journey]?.tasks?.[taskName]?.taskGuide;

  let nftCount = 0;
  if (nfts) {
    nftCount = Object.entries(nfts).filter(([_, value]) => value !== 0).length;
  }
  return (
    <div className={styles.tasksection}>
      <div className={styles.wrapper}>
        <Link className={styles.back} href={`/journeyPage/${journey}`}>
          <ArrowRight className={styles.back__svg} />
          <p className={styles.back__text}>Back</p>
        </Link>
        <ul className={styles.top}>
          <li>
            <ProjectName tag={initialData[journey]?.tasks[taskName].source}>
              {initialData[journey]?.tasks[taskName].source}
            </ProjectName>
          </li>
          <li>
            <Status type={countOfEfforts ? 'completed' : 'todo'} />
          </li>
        </ul>
        <h2 className={styles.title}>
          {initialData[journey]?.tasks[taskName].title}
        </h2>

        <h3 className={styles.subtitle}>
          {initialData?.[journey].tasks[taskName].taskDesc}
        </h3>

        {steps.map((step, index) => (
          <Accordion
            key={step[0]}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={index}
            step={step[0]}
          >
            {step[1]}
          </Accordion>
        ))}
      </div>
      {notif && <Notification onClick={() => setNotif('')} type={notif} />}
      <div className={styles.down}>
        <div className={styles.downbtns}>
          {WalletAddress && (
            <>
              {exp >= needExp[nftCount] && (
                <Button
                  onClick={() => setModalActive(true)}
                  style={{ width: '130px' }}
                >
                  Claim Reward
                </Button>
              )}
              {notif !== 'error' ? (
                <>
                  <Button
                    onClick={handleVerify}
                    background={countForStatusVeryf && 'transparent'}
                    loader={loader}
                  >
                    Verify
                  </Button>
                  <Button
                    onClick={handleVerifyTEST}
                    // background={countForStatusVeryf && 'transparent'}
                    // loader={loader}
                  >
                    TEST Verify
                  </Button>
                </>
              ) : (
                <Button onClick={() => setNotif('')} type="error">
                  Try again!
                </Button>
              )}
            </>
          )}
        </div>

        <Badge showIconLeft IconLeft={XpSvg}>
          {initialData[journey]?.tasks[taskName].exp}
        </Badge>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <ModalMint setModalActive={setModalActive} />
      </ModalWindow>
    </div>
  );
};
