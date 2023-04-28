export const getJourneyTasks = (journeyName, obj) => {
<<<<<<< Updated upstream
  let journey = obj[journeyName];
=======
  let journey = obj[journeyName] || {};
>>>>>>> Stashed changes
  let totalTasks = Object.keys(journey).length;
  let doneTasks = 0;

  for (let task in journey) {
    if (journey[task] !== 0) {
      doneTasks++;
    }
  }

  return { totalTasks, doneTasks };
};
