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
};
const testData = {
  journey0: {
    nick: "Journey prepartion",
    title: "First steps in ZkSync",
    tasks: {
      task1: {
        title: "Make any swap",
        exp: 10,
        source: "Mute.io",
        link: "https://mute.io/",
      },
    },
  },

  journey1: {
    nick: "Journey One",
    title: "Basic swaps and mints",
    tasks: {
      task11: {
        title: "Swap any token",
        exp: 10,
        source: "Space.net",
        link: "https://space.net/",
      },
      task12: {
        title: "Mint NFT",
        exp: 10,
        source: "Rhino.fi",
        link: "https://rhino.fi/",
      },
    },
  },
  journey2: {
    nick: "Journey Two",
    title: "Advanced swaps, LP, leverage trading",
    tasks: {
      task21: {
        title: "Wrap any amount of ETH",
        exp: 30,
        source: "Space.net",
        link: "https://space.net/",
      },
      task22: {
        title: "Swap any token",
        exp: 30,
        source: "Rhino.fi",
        link: "https://rhino.fi/",
      },
      task23: {
        title: "Transfer any token",
        exp: 30,
        source: "Rhino.io",
        link: "https://Rhino.io/",
      },
    },
  },
};
const jsonString = JSON.stringify(testData);
