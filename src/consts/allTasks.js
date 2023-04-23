export const allTasks = {
  journey0: {
    task1: 10,
    task2: 10,
  },
  journey1: {
    task11: 10,
    task12: 10,
    task13: 10,
    task14: 10,
    task15: 10,
    task16: 10,
  },
  journey2: {
    task21: 30,
    task22: 30,
    task23: 30,
    task24: 30,
    task25: 30,
    task26: 30,
    task27: 30,
    task28: 30,
    task29: 30,
    task201: 30,
    task202: 30,
    task203: 30,
  },
  journey3: {
    task31: 50,
    task32: 50,
    task33: 50,
    task34: 50,
    task35: 50,
    task36: 50,
    task37: 50,
    task38: 50,
    task39: 50,
    task301: 50,
    task302: 50,
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
