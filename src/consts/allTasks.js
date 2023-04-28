export const allTasks = {
  journey0: {
    task1: 10,
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
        title: "Bridge to ZKSync ERA",
        exp: 10,
        source: "zkSync.io",
        link: "https://bridge.zksync.io/",
      },
    },
  },
  journey1: {
    nick: "Journey One",
    title: "Basic swaps and mints",
    tasks: {
      task11: {
        title: "Make any swap",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
      },
      task12: {
        title: "Wrap any amount of ETH",
        exp: 10,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
      },
      task13: {
        title: "Swap any token",
        exp: 10,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/trade",
      },
      task14: {
        title: "Mint any NFT",
        exp: 10,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/mint",
      },
      task15: {
        title: "Swap any token",
        exp: 10,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
      },
      task16: {
        title: "Swap any token",
        exp: 10,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/",
      },
    },
  },
  journey2: {
    nick: "Journey Two",
    title: "Advanced swaps, LP, Leveraged Trading",
    tasks: {
      task21: {
        title: "Swap any token",
        exp: 30,
        source: "Mute.io",
        link: "https://app.mute.io/swap",
      },
      task22: {
        title: "Swap any token for any amount",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/swap",
      },
      task23: {
        title: "Add any amount of any token to any pool",
        exp: 30,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
      },
      task24: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Onchain.trade",
        link: "https://onchain.trade/#/pools",
      },
      task25: {
        title: "Buy any existing NFT",
        exp: 30,
        source: "Mintsquare.io",
        link: "https://mintsquare.io/collections/zksync",
      },
      task26: {
        title: "Approve /'use as collateral'/ ",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
      },
      task27: {
        title: "Supply USDC or ETH",
        exp: 30,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
      },
      task28: {
        title: "Add liquidity to any pool",
        exp: 30,
        source: "Spacefi.io",
        link: "https://swap-zksync.spacefi.io/#/pool",
      },
      task29: {
        title: "Add any amount of any token to any pool",
        exp: 30,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
      },
      task201: {
        title: "Open a long or short position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
      },
      task202: {
        title: "Close your position",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/trade",
      },
      task203: {
        title: "Add liquidity to USDC pool",
        exp: 30,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
      },
    },
  },
  journey3: {
    nick: "Journey Three",
    title: "Lend and Borrow, Bons, Remove liquidity and more",
    tasks: {
      task31: {
        title: "Lock any amount of token in DAO for any amount of time",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
      },
      task32: {
        title: "Add liquidity to MUTE/WETH pool",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/pool",
      },
      task33: {
        title: "Redeem any amount of token from DAO",
        exp: 50,
        source: "Mute.io",
        link: "https://app.mute.io/dao",
      },
      task34: {
        title: "Convert SPACE to xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
      },
      task35: {
        title: "Unbond xSPACE",
        exp: 50,
        source: "Spacefi.io",
        link: "https://app.spacefi.io/#/xSPACE",
      },
      task36: {
        title: "Borrow USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance",
      },
      task37: {
        title: "Repay USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
      },
      task38: {
        title: "Withdraw USDC or ETH",
        exp: 50,
        source: "Nexon.finance",
        link: "https://app.nexon.finance/",
      },
      task39: {
        title: "Remove any amount of any token from any pool",
        exp: 50,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/pool",
      },
      task301: {
        title: "Remove liquidity from the pool",
        exp: 50,
        source: "Unidex.exchange",
        link: "https://leverage.unidex.exchange/#/pool",
      },
      task302: {
        title: "Remove liquidity from any pool",
        exp: 50,
        source: "Syncswap.xyz",
        link: "https://syncswap.xyz/pools",
      },
    },
  },
  journeyEnd: {
    nick: "Journey End",
    title: "Bridges",
    tasks: {
      task01: {
        title: "Bridge any amount of ETH from zkSync Era to any chain",
        exp: 110,
        source: "Orbiter.finance",
        link: "https://www.orbiter.finance",
      },
      task02: {
        title: "Bridge any token from zkSync ERA",
        exp: 110,
        source: "Multichain.org",
        link: "https://app.multichain.org/#/router ",
      },
    },
  },
};
const jsonString = JSON.stringify(testData);
