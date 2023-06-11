import {
  setFirstNftPrice,
  setInitialData,
  setNeedExp,
  setNftPrice,
} from "@/store/initialData/reducer";
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
import useNftContract from "@/web3/useNftContract";

export const useFetchData = (serverData, bestUsers, dataUsers) => {
  const dispatch = useDispatch();
  const { address: walletAddress } = useAccount();
  const { contract } = useNftContract();

  useEffect(() => {
    (async () => {
      const needExp = generateSummaryObj(serverData);
      dispatch(setNeedExp(needExp));
      dispatch(setUsers(bestUsers));
      dispatch(setAllUsers(dataUsers));
      dispatch(setInitialData(serverData));
      if (contract) {
        const price = Number(await contract.price());
        dispatch(setNftPrice(price));
        const firstPprice = Number(await contract.priceFirst());
        dispatch(setFirstNftPrice(firstPprice));
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (walletAddress) {
          const { record, token } = await postRecord(walletAddress);
          if (record && token) {
            dispatch(setAddress(record.address));
            dispatch(setExp(record.exp));
            dispatch(setStoredTasks(record.tasks));
            dispatch(setNfts(record.nfts));
            dispatch(setJwt(token));
          }
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [walletAddress]);
};
