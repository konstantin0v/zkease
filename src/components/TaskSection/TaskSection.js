import styles from "./TaskSection.module.css";
import {
  Accordion,
  ArrowRight,
  Badge,
  Button,
  ModalWindow,
  Notification,
  ProjectName,
  Status,
  XpSvg,
} from "@/components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const countForStatusVeryf = storedTasks?.[journey]?.[taskName];
  const steps = initialData?.[journey]?.tasks?.[taskName]?.taskGuide;
  const needExp = { 0: 10, 1: 70, 2: 400, 3: 950, 4: 1170 };
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
            <Status type={countOfEfforts ? "completed" : "todo"} />
          </li>
        </ul>
        <h2 className={styles.title}>
          {initialData[journey]?.tasks[taskName].title}
        </h2>
        {/* <h3 className={styles.subtitle}>{initialData[journey]?.journeyDesc}</h3> */}
        <h3 className={styles.subtitle}>
          {initialData?.[journey].tasks[taskName].taskDesc}
        </h3>
        {/* <Accordion content={initialData[journey]?.tasks[taskName].taskDesc} /> */}

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
      {notif && (
        <Notification onClick={() => setNotif("")} type={notif}>
          сообщение об{" "}
        </Notification>
      )}
      <div className={styles.down}>
        {WalletAddress && (
          <>
            {notif !== "error" ? (
              <Button
                onClick={handleVerify}
                background={countForStatusVeryf && "transparent"}
                loader={loader}
              >
                Verify
              </Button>
            ) : (
              <Button onClick={() => setNotif("")} type="error">
                Try again!
              </Button>
            )}

            {exp >= needExp[nftCount] && (
              <Button onClick={() => setModalActive2(true)}>
                Claim Reward
              </Button>
            )}

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
          <Image
            src={`/image/nft/${journey}.png`}
            alt="nft"
            width={190}
            height={256}
          />
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
          <Button width="full" onClick={() => setModalActive2(true)}>
            Go to Claim
          </Button>
          <Button
            background="transparent"
            width="full"
            onClick={() => setModalActive(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
      {/* МОДАЛКА МИНТА */}
      <ModalWindow active={modalActive2} setActive={setModalActive2}>
        <div className={styles.nft}>
          <Image
            src={`/image/nft/${journey}.png`}
            alt="nft"
            width={190}
            height={256}
          />
        </div>
        <div className={styles.modal}>
          <h2>Ready to claim your Level 02 NFT?</h2>
          <h3>You will gain access to the next journey.</h3>
          <Button width="w100">Claim NFT 0.0008 ETH</Button>
          <Button
            background="transparent"
            width="full"
            onClick={() => setModalActive2(false)}
          >
            Maybe Later
          </Button>
        </div>
      </ModalWindow>
    </div>
  );
};
