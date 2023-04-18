import { Task } from "@/components";
import postRecord from "@/serverUtils/postRecord";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import {
  setExp,
  setAddress,
  setBestPerformers,
} from "../store/zkRecord/reducer";
// import {  setUsers } from "../store/users/reducer";
import { useDispatch, useSelector } from "react-redux";
import { zkRecordSelector } from "../store/zkRecord/reducer";
import updateTasksByAddress from "../serverUtils/updateTasksByAddress";
import { useRouter } from "next/router";
// import { usersSelector } from '../store/users/reducer';

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
  // console.log("WAGMIaddress", WalletAddress);
  // console.log("RENDER");
  const score = 0;
  const dispatch = useDispatch();
  const { address, exp, bestPerformers } = useSelector(zkRecordSelector);
  //const {  users } = useSelector(usersSelector);
  const router = useRouter()
  const handleAddExpTEST = async() =>{
    const {record} = await updateTasksByAddress(address, 'test', 10)
    dispatch(setExp(record.exp));
    //router.reload();
  };
  // const handleAddExpTEST = useCallback(async() => {
  //   const {record} = await updateTasksByAddress(address, 'test', 10)
  //   dispatch(setExp(record.exp));
  // }, []);
  useEffect(() => {
    (async () => {
      dispatch(setBestPerformers(bestUsers));
    })();
  }, [useDispatch]);
console.log('EXP', exp)
  useEffect(() => {
    (async () => {
      try {
        // setLoader(true)
        if (WalletAddress) {
          const response = await fetch(
            `https://lobster-app-obfjt.ondigitalocean.app/get/${WalletAddress}`
          );
          const { record } = await response.json();
          // console.log("DATA", record);
          if (record) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
          } else {
            await postRecord(WalletAddress, score);
            dispatch(setAddress(WalletAddress));
            dispatch(setExp(score));
          }
        }
        //  setLoader(false)
      } catch (error) {
        console.error(error);
      }
    })();
  }, [WalletAddress]);


  return (
    <>
      <div className={styles.banner}>banner</div>
      <Link href="/task/task" className={styles.ink}>
        click me
      </Link>
      <Task />
    
      <button onClick={handleAddExpTEST}>GIVE ME EXP</button>
    </>
  );
}
