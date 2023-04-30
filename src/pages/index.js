import { JourneyCard } from "@/components";
import postRecord from "@/serverUtils/postRecord";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import {
  setExp,
  setAddress,
  setStoredTasks,
  setNfts,
} from "../store/zkRecord/reducer";
import { setUsers } from "../store/users/reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  initialDataSelector,
  setInitialData,
} from "@/store/initialData/reducer";

export const getServerSideProps = async () => {
  try {
    const responseUsers = await fetch(
      "https://lobster-app-obfjt.ondigitalocean.app/"
    );
    const dataUsers = await responseUsers.json();

    const responseData = await fetch(
      `https://lobster-app-obfjt.ondigitalocean.app/data`
    );
    const { records } = await responseData.json();
    const { _id, ...serverData } = records[0];

    const bestUsers = dataUsers.records
      .sort((a, b) => b.exp - a.exp)
      .slice(0, 10);

    return {
      props: { bestUsers, serverData },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
      props: { bestUsers: [], serverData: {} },
    };
  }
};

export default function Home({ bestUsers, serverData, ...props }) {
  const { address: WalletAddress } = useAccount();
  const { initialData } = useSelector(initialDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(setUsers(bestUsers));
      dispatch(setInitialData(serverData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (WalletAddress) {
          const { record } = await postRecord(WalletAddress);
          if (record) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
            dispatch(setStoredTasks(record.tasks));
            dispatch(setNfts(record.nfts));
          } else throw new Error(record.error);
        } else return null;
      } catch (error) {
        console.error(error);
      }
    })();
  }, [WalletAddress]);

  return (
    <>
      <div className={styles.banner}>banner</div>
      <h2 className={styles.title}>Journeys in zkSync</h2>
      <div className={styles.box}>
        {(initialData &&
          Object.keys(initialData).map((i, id, arr) => (
            <div key={i}>
              <JourneyCard
                prevJourneyName={arr[id - 1]}
                journeyName={i}
                journeyNick={initialData[i]?.nick}
                journeyTitle={initialData[i]?.title}
              />
            </div>
          ))) || <p>No journeys found</p>}
      </div>
    </>
  );
}
