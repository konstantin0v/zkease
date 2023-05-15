import styles from './TaskSection.module.css';
import {
  Accordion,
  ArrowRight,
  Badge,
  Button,
  ModalWindow,
  ProjectName,
  Status,
  XpSvg,
} from '@/components';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const TaskSection = ({
  initialData,
  journey,
  taskName,
  countOfEfforts,
  handleVerify,
  handleVerifyTEST,
  WalletAddress,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const steps = [
    ['Connect Web3 Wallet', 'Connect your Web3 wallet to the platform.'],
    [
      'Choose Pool and Deposit',
      'Select any pool and click on the + deposit button.',
    ],
    [
      'Input Token Amount',
      'Enter the desired amount of tokens you want to add to the pool.',
    ],
    [
      'Click Add Liquidity',
      "Click on the 'Add liquidity' button to initiate the transaction.",
    ],
    ['Confirm Transaction', 'Confirm the transaction in your Web3 wallet.'],
  ];
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
        {/* <h3 className={styles.subtitle}>{initialData[journey]?.journeyDesc}</h3> */}
        <h3 className={styles.subtitle}>Здесь надо вставить таск дескрипшен</h3>
        {/* <Accordion content={initialData[journey]?.tasks[taskName].taskDesc} /> */}
        {steps.map((step, index) => (
          <Accordion key={step} index={++index} step={step[0]}>
            {step[1]}
          </Accordion>
        ))}
      </div>
      <div className={styles.down}>
        {WalletAddress && (
          <>
            <Button>Next task</Button>
            <Button onClick={handleVerify}>Verify</Button>
            <Button onClick={handleVerify} transparent>
              Verify
            </Button>
            <Button onClick={() => setModalActive(true)}>Continue</Button>
            <Button onClick={handleVerify} error>
              Continue
            </Button>
            {/* <Button onClick={handleVerifyTEST} }>
              TEST Verify
            </Button> */}
          </>
        )}
        <Badge showIconLeft IconLeft={XpSvg}>
          {initialData[journey]?.tasks[taskName].exp}
        </Badge>
      </div>
      {/* МОДАЛКА ПОЗДРАВЛЕНИЯ И ПРЕДЛОЖЕНИЯ ЗАМИНТИТЬ */}
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className={styles.nft}>
          <Image src={`/image/nfts/${journey}.png`} alt="nft" fill={true} />
        </div>
        <div className={styles.modal}>
          <h2>You have reached</h2>
          <p>
            здесь,вместо картинки, и строчкой ниже нужно подтягивать следующий
            уровень, не текущий
          </p>
          <h3>
            Congratulations! Now you can claim вот тут тоже to access the next
            journey
          </h3>
          <Button w100="w100" onClick={() => setModalActive2(true)}>
            Go to Claim
          </Button>
          <Button
            transparent="transparent"
            w100="w100"
            onClick={() => setModalActive(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
      {/* МОДАЛКА МИНТА */}
      <ModalWindow active={modalActive2} setActive={setModalActive2}>
        <div className={styles.nft}>
          <Image src={`/image/nfts/${journey}.png`} alt="nft" fill={true} />
        </div>
        <div className={styles.modal}>
          <h2>Ready to claim your Level 02 NFT?</h2>
          <h3>You will gain access to the next journey.</h3>
          <Button w100="w100">Claim NFT 0.0008 ETH</Button>
          <Button
            transparent="transparent"
            w100="w100"
            onClick={() => setModalActive2(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
    </div>
  );
};
