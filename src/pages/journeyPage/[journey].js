import { useRouter } from "next/router";
import styles from "./journeyPage.module.css";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { initialDataSelector } from "@/store/initialData/reducer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, TaskCard } from "@/components";
import { useVerifyAccess } from "@/utils/useVerifyAccess";

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
  const { address: walletAddress } = useAccount();
  const router = useRouter();
  const [updateCount, setUpdateCount] = useState(0);

  const { access } = useVerifyAccess(journey);

  useEffect(() => {
    if (updateCount >= 2 && walletAddress !== undefined) {
      router.push("/");
    }
  }, [walletAddress, updateCount]);

  useEffect(() => {
    setUpdateCount((count) => count + 1);
  }, [walletAddress]);

  return (
    <div className={styles.wrapper}>
      {initialData && access ? (
        <div>
          <Link className={styles.back} href="/">
            <ArrowRight className={styles.back__svg} />
            <p className={styles.back__text}>Back</p>
          </Link>
          <h2 className={styles.title}>{initialData[journey]?.nick}</h2>
          <h3 className={styles.desc}>{initialData[journey]?.journeyDesc}</h3>
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
      ) : (
        <p>You have not minted NFT yet</p>
      )}
    </div>
  );
};

export default JourneyPage;
