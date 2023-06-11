import { updateZKRecord } from "@/serverUtils/updateZKRecord";
import { initialDataSelector } from "@/store/initialData/reducer";
import {
  setExp,
  setStoredTasks,
  zkRecordSelector,
} from "@/store/zkRecord/reducer";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

export const useVerify = (journey, taskName) => {
  const { address: walletAddress } = useAccount();
  const dispatch = useDispatch();
  const [loader, setLoder] = useState(false);
  const [notif, setNotif] = useState("");
  const { exp, storedTasks, jwt } = useSelector(zkRecordSelector);
  const { initialData } = useSelector(initialDataSelector);

  const provider = new ethers.providers.JsonRpcProvider(
    //"https://testnet.era.zksync.dev"
    "https://mainnet.era.zksync.io"
  );
  const newPath = `tasks.${journey}.${taskName}`;
  let countOfEfforts = storedTasks?.[journey]?.[taskName];
  if (!walletAddress) {
    countOfEfforts = false;
  }
  const [firstTxCount, setfirstTxCount] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const txCountFirst = await provider.getTransactionCount(walletAddress);
        setfirstTxCount(txCountFirst);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [walletAddress]);

  const handleVerify = async () => {
    try {
      setLoder(true);
      setNotif("");
      const newExp = exp + initialData[journey].tasks[taskName].exp;
      const newCountOfEfforts = countOfEfforts + 1;
      const txCountNow = await provider.getTransactionCount(walletAddress);
      if (firstTxCount && txCountNow > firstTxCount) {
        setfirstTxCount(txCountNow);
        const response = await updateZKRecord(
          walletAddress,
          newExp,
          newPath,
          newCountOfEfforts,
          jwt
        );
        dispatch(setExp(response.exp));
        dispatch(setStoredTasks(response.tasks));
        setLoder(false);
        setNotif("success");
      } else {
        setNotif("error");
        setLoder(false);
      }
    } catch (error) {
      console.log(error);
      setNotif("error");
      setLoder(false);
    }
  };

  return { loader, notif, setNotif, handleVerify };
};
