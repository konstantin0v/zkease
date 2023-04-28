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
import { allTasks, replaceValuesWithZero } from "@/consts/allTasks";
import { nfts } from "@/consts/nfts";
import { v4 as uuidv4 } from "uuid";
import {
  initialDataSelector,
  setInitialData,
} from "@/store/initialData/reducer";

// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch(
//       "https://lobster-app-obfjt.ondigitalocean.app/"
//     );
//     const data = await response.json();
//     if (data.error) {
//       return {
//         props: { bestUsers: [] },
//       };
//     }
//     const bestUsers = data.records.sort((a, b) => b.exp - a.exp).slice(0, 5);
//     return {
//       props: { bestUsers },
//     };
//   } catch (error) {
//     console.error(error);
//   }
// };
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

    if (dataUsers.error || records.error) {
      return {
        props: { bestUsers: [], serverData: [] },
      };
    }
    const bestUsers = dataUsers.records
      .sort((a, b) => b.exp - a.exp)
      .slice(0, 5);
    return {
      props: { bestUsers, serverData },
    };
  } catch (error) {
    console.error(error);
  }
};

export default function Home({ bestUsers, serverData, ...props }) {
  const { address: WalletAddress } = useAccount();
  const { initialData } = useSelector(initialDataSelector);
  const score = 0;
  const initialTasks = replaceValuesWithZero(allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setUsers(bestUsers));
      dispatch(setInitialData(serverData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (WalletAddress) {
          //const response = await fetch(`http://localhost:3003/get/${WalletAddress}`);
          const response = await fetch(
            `https://lobster-app-obfjt.ondigitalocean.app/get/${WalletAddress}`
          );
          const { record } = await response.json();
          if (record) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
            dispatch(setStoredTasks(record.tasks));
            dispatch(setNfts(record.nfts));
          } else {
            await postRecord(WalletAddress, score, initialTasks, nfts);
            dispatch(setAddress(WalletAddress));
            dispatch(setExp(score));
            dispatch(setStoredTasks(initialTasks));
            dispatch(setNfts(nfts));
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [WalletAddress]);

  return (
    <>
      <div className={styles.banner}>banner</div>
      <div className={styles.box}>
        {(initialData &&
          Object.keys(initialData).map((i) => (
            <div key={i}>
              <JourneyCard
                id={i}
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
//info
//inf02
//info3
//info4
