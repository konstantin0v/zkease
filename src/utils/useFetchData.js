import { setInitialData, setNeedExp } from "@/store/initialData/reducer";
import { generateSummaryObj } from "./generateSummaryObj";
import { setAllUsers, setUsers } from "@/store/users/reducer";
import { useDispatch } from "react-redux";
import postRecord from "@/serverUtils/postRecord";
import {
  setAddress,
  setExp,
  setJwt,
  setNfts,
  setStoredTasks,
} from "@/store/zkRecord/reducer";
import { useAccount } from "wagmi";
import { useEffect } from "react";

export const useFetchData = (serverData, bestUsers, dataUsers) => {
  const dispatch = useDispatch();
  const { address: walletAddress } = useAccount();

  useEffect(() => {
    (() => {
      const needExp = generateSummaryObj(serverData);
      dispatch(setNeedExp(needExp));
      dispatch(setUsers(bestUsers));
      dispatch(setAllUsers(dataUsers));
      dispatch(setInitialData(serverData));
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (walletAddress) {
          const { record, token } = await postRecord(walletAddress);
          if (record) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
            dispatch(setStoredTasks(record.tasks));
            dispatch(setNfts(record.nfts));
            dispatch(setJwt(token));
          } else throw new Error(record.error);
        } else return null;
      } catch (error) {
        console.error(error);
      }
    })();
  }, [walletAddress]);
};
