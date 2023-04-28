export const getJourneyTasks = (journeyName, obj) => {
  let journey = {};
  let totalTasks = Object.keys(journey).length;
  let doneTasks = 0;

  for (let task in journey) {
    if (journey[task] !== 0) {
      doneTasks++;
    }
  }

  return { totalTasks, doneTasks };
};
