import { updateZKRecord } from "@/serverUtils/updateZKRecord";
import { initialDataSelector } from "@/store/initialData/reducer";
import styles from "./taskNamePage.module.css";
import {
  setExp,
  setStoredTasks,
  zkRecordSelector,
} from "@/store/zkRecord/reducer";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import {
  Badge,
  Status,
  ProjectName,
  XpSvg,
  LinkSvg,
  Button,
} from "@/components";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";

export async function getServerSideProps(context) {
  try {
    const { journey, taskName } = context.query;
    return {
      props: { journey, taskName },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}

const TaskPage = ({ journey, taskName, ...props }) => {
  const { address: WalletAddress } = useAccount();
  const dispatch = useDispatch();
  const { exp, storedTasks } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);

  const earnedExp = initialData[journey].tasks[taskName].exp;
  const newPath = `tasks.${journey}.${taskName}`;
  let countOfEfforts = storedTasks?.[journey]?.[taskName];
  if (!WalletAddress) {
    countOfEfforts = false;
  }

  const handleVerify = async () => {
    const newExp = exp + earnedExp;
    const newCountOfEfforts = countOfEfforts + 1;
    const response = await updateZKRecord(
      WalletAddress,
      newExp,
      newPath,
      newCountOfEfforts
    );
    dispatch(setExp(response.exp));
    dispatch(setStoredTasks(response.tasks));
  };

  return (
    <div className={styles.main}>
      <ul className={styles.top}>
        <li>
          <ProjectName tag={initialData[journey].tasks[taskName].source}>
            {initialData[journey].tasks[taskName].source}
          </ProjectName>
        </li>
        <li>
          <Status type={countOfEfforts ? "completed" : "todo"} />
        </li>
      </ul>
      <h2 className={styles.title}>
        {initialData[journey].tasks[taskName].title}
      </h2>
      <h3 className={styles.subtitle}>{initialData[journey].journeyDesc}</h3>
      <Accordion content={initialData[journey].tasks[taskName].taskDesc} />
      <div className={styles.iframewrapper}>
        <p className={styles.iframe__text}>Try here</p>
        <Link
          href={initialData[journey].tasks[taskName].link}
          className={styles.iframe__link}
          target="_blank"
        >
          Open new tab
          <LinkSvg className={styles.iframe__svg} />
        </Link>
      </div>
      <iframe
        src={initialData[journey].tasks[taskName].link}
        width="100%"
        height="800"
      ></iframe>
      <div className={styles.iframewrapper__down}></div>
      <div className={styles.down}>
        {WalletAddress && (
          <Button
            type="intent-primary"
            intent="primary"
            size="large"
            onClick={handleVerify}
            style={{ width: "91px" }}
          >
            Verify
          </Button>
        )}
        <Badge showIconLeft IconLeft={XpSvg}>
          {initialData[journey].tasks[taskName].exp}
        </Badge>
      </div>
    </div>
  );
};

export default TaskPage;
