const updateNftCount = async (address, nft, jwt) => {
  try {
    // const response = await fetch(
    //   `http://localhost:3003/rewrite/${address}`,
    const response = await fetch(
      //   `https://clownfish-app-z2nhn.ondigitalocean.app/rewrite/${address}`,
      `https://sea-lion-app-39uur.ondigitalocean.app/rewrite/${address}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          nft: nft,
        }),
      }
    );
    const record = await response.json();
    return record;
  } catch (error) {
    console.error("Failed to update document:", error);
  }
};

export default updateNftCount;
