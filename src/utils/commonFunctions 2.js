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

const getPath = (task) => {
  for (const [journey, tasks] of Object.entries(initialData)) {
    if (task in tasks) {
      return `tasks.${journey}.${task}`;
    }
  }
  return null; // task not found
};

const getTaskValue = (allTasks, taskName) => {
  for (let journeyName in allTasks) {
    if (taskName in allTasks[journeyName]) {
      return allTasks[journeyName][taskName];
    }
  }
  return null;
};
