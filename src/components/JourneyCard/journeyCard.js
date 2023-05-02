import Link from "next/link";
// import styles from "./journeyCard.module.css";

import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import styles from "./journeyCard.module.css";
import Status from "../Status/Status";
import ProgressBar from "@ramonak/react-progress-bar";
import CustomLink from "./customLink";
import Badge from "@/components/Badge/Badge";
import { XpSvg } from "@/components";
import { useAccount } from "wagmi";
import { initialDataSelector } from "@/store/initialData/reducer";
import { getJourneyTasks } from "@/utils/getJourneyTasks";

export const JourneyCard = ({
  journeyName,
  journeyTitle,
  journeyNick,
  prevJourneyName,
  showNewTaskBadge = false,
  ...props
}) => {
  const { storedTasks, nfts } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);
  const { address: WalletAddress } = useAccount();

  let { doneTasks, totalTasks } = getJourneyTasks(journeyName, storedTasks);
  if (!WalletAddress) {
    (doneTasks = 0),
      (totalTasks = Object.keys(initialData[journeyName].tasks).length);
  }

  return (
    <CustomLink
      href={`/journeyPage/${journeyName}`}
      disabled={
        (!WalletAddress && journeyName != "journey0") ||
        (journeyName != "journey0" && !nfts[prevJourneyName])
      }
    >
      <div className={styles.top}>
        <Status
          type={
            (journeyName != "journey0" && !nfts[prevJourneyName] && "locked") ||
            (doneTasks === 0 && "todo") ||
            (doneTasks === totalTasks && "completed") ||
            (doneTasks < totalTasks && doneTasks !== 0 && "progress")
          }
        />
        <p className={styles.top__text}>
          {doneTasks}/{totalTasks}
        </p>
      </div>
      <ProgressBar
        bgColor="#155EE6"
        baseBgColor="#F7F7F71A"
        height="4px"
        borderRadius="8px"
        customLabel=" "
        completed={(doneTasks / totalTasks) * 100}
        className={styles.bar}
      />
      <h3 className={styles.subtitle}>{journeyNick}</h3>
      <h4 className={styles.description}>{journeyTitle}</h4>
      <div className={styles.badges}>
        <Badge showIconLeft IconLeft={XpSvg}>
          {Object.values(initialData[journeyName].tasks).reduce(
            (acc, val) => acc + val.exp,
            0
          )}
        </Badge>
        {showNewTaskBadge && <Badge appereance="blue">New tasks!</Badge>}
      </div>
    </CustomLink>
  );
};
