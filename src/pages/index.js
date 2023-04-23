import { JourneyCard } from "@/components";
import postRecord from "@/serverUtils/postRecord";
import styles from "@/styles/Home.module.css";
import {  useEffect } from "react";
import { useAccount } from "wagmi";
import {
  setExp,
  setAddress,
  setStoredTasks,
  setNfts
} from "../store/zkRecord/reducer";
import {  setUsers } from "../store/users/reducer";
import { useDispatch } from "react-redux";
import { allTasks, replaceValuesWithZero } from "@/consts/allTasks";
import { nfts } from "@/consts/nfts";
import { v4 as uuidv4  } from 'uuid';
import ModalWindow from "@/components/ModalWindow/ModalWindow";

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://lobster-app-obfjt.ondigitalocean.app/");
    const data = await response.json();
    if (data.error) {
      return {
        props: { bestUsers: [] },
      };
    }
    const bestUsers = data.records.sort((a, b) => b.exp - a.exp).slice(0, 5);
    return {
      props: { bestUsers },
    };
  } catch (error) {
    console.error(error);
  }
};

export default function Home({ bestUsers, ...props }) {
  const { address: WalletAddress } = useAccount();
  const score = 0;
   const initialTasks = replaceValuesWithZero(allTasks)
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(setUsers(bestUsers))
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (WalletAddress) {
          //const response = await fetch(`http://localhost:3003/get/${WalletAddress}`);
          const response = await fetch(`https://lobster-app-obfjt.ondigitalocean.app/get/${WalletAddress}`);
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
      <ModalWindow />

{
    Object.keys(allTasks).map(i => 
    <div key={uuidv4()}>
      <JourneyCard journeyName={i}/>
    </div>
    )
}    </>
  );
}
