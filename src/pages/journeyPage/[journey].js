import { useRouter } from "next/router";
import styles from "./journeyPage.module.css";
import { useSelector } from "react-redux";
import { zkRecordSelector } from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import TaskCard from "@/components/TaskCard/taskCard";
import { initialDataSelector } from "@/store/initialData/reducer";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  try {
    const { journey } = context.query;
    return {
      props: { journey },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
const JourneyPage = ({ journey }) => {
  const { initialData } = useSelector(initialDataSelector);
  const { exp } = useSelector(zkRecordSelector);
  const { address: WalletAddress } = useAccount();
  const router = useRouter();
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    if (updateCount >= 2 && WalletAddress !== undefined) {
      router.push("/");
    }
  }, [WalletAddress, updateCount]);

  useEffect(() => {
    setUpdateCount((count) => count + 1);
  }, [WalletAddress]);

  return (
    <>
      {initialData && (
        <div>
          <h2 className={styles.title}>{initialData[journey]?.nick}</h2>
          <h3 className={styles.desc}>{initialData[journey]?.journeyDesc}</h3>
          <h2 className={styles.subtitle}>Tasks</h2>
          <div className={styles.cards}>
            {(initialData[journey]?.tasks &&
              Object.entries(initialData[journey].tasks).map(([key, task]) => (
                <TaskCard
                  key={key}
                  taskName={key}
                  journeyName={journey}
                  {...task}
                />
              ))) || <p>No tasks found</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default JourneyPage;
