export const allTasks = {
  journey0: {
    task1: 10,
    task2: 10,
  },
  journey1: {
    task11: 10,
    task12: 10,
    task13: 10,
  },
  journey2: {
    task21: 30,
    task22: 30,
    task23: 30,
  },
  journey3: {
    task31: 50,
    task32: 50,
    task33: 50,
  },
  journeyEnd: {
    task01: 110,
    task02: 110,
  },
};



export const replaceValuesWithZero = (obj) => {
  const newObj = {};
  for (let journey in obj) {
    newObj[journey] = {};
    for (let task in obj[journey]) {
      newObj[journey][task] = 0;
    }
  }
  return newObj;
}
