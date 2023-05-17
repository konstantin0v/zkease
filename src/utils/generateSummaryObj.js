export function generateSummaryObj(testData) {
  const summaryObj = {};

  let cumulativeExp = 0;

  Object.keys(testData).forEach((key, index) => {
    const journeyExp = Object.values(testData[key].tasks).reduce(
      (totalExp, task) => totalExp + task.exp,
      0
    );

    cumulativeExp += journeyExp;

    summaryObj[index] = cumulativeExp;
  });

  return summaryObj;
}
