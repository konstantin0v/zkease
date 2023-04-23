import { updateZKRecord } from "@/serverUtils/updateZKRecord";
import { allTasks } from "@/consts/allTasks";
import updateNftCount from "@/serverUtils/updateNftCount";

// export const firstDataLoad = async () => {
//   try {
//     if (WalletAddress) {
//       const response = await fetch(`http://localhost:3003/get/${WalletAddress}`);
//       //const response = await fetch(`https://lobster-app-obfjt.ondigitalocean.app/get/${WalletAddress}`);
//       const { record } = await response.json();
//       if (record) {
//         dispatch(setAddress(record.address));
//         dispatch(setExp(record.exp));
//         dispatch(setStoredTasks(record.tasks));
//         dispatch(setNfts(record.nfts));

//       } else {
//         await postRecord(WalletAddress, score, initialTasks, nfts);
//         dispatch(setAddress(WalletAddress));
//         dispatch(setExp(score));
//         dispatch(setStoredTasks(initialTasks));
//         dispatch(setNfts(nfts));
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

export const getPath = (task) => {
  for (const [journey, tasks] of Object.entries(allTasks)) {
    if (task in tasks) {
      return `tasks.${journey}.${task}`;
    }
  }
  return null; // task not found
};

export const getTaskValue = (allTasks, taskName) => {
  for (let journeyName in allTasks) {
    if (taskName in allTasks[journeyName]) {
      return allTasks[journeyName][taskName];
    }
  }
  return null;
};

export const handleVerify = async (
  exp,
  storedTasks,
  WalletAddress,
  taskName,
  dispatch,
  setExp,
  setStoredTasks
) => {
  const newExp = exp + getTaskValue(allTasks, taskName);
  const taskPath = getPath(taskName);
  const newCountOfEfforts = getTaskValue(storedTasks, taskName) + 1;
  const response = await updateZKRecord(
    WalletAddress,
    newExp,
    taskPath,
    newCountOfEfforts
  );
  dispatch(setExp(response.exp));
  dispatch(setStoredTasks(response.tasks));
};

export const handleMintNft = async (WalletAddress, journey, setNfts, dispatch) => {
  try {
   const response = await updateNftCount(WalletAddress, journey)
  dispatch(setNfts(response.nfts));

  } catch (error) {
    console.log(error);
  }
  
  
}