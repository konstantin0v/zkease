const updateNftCount = async (address, nft) => {
  try {
    // const response = await fetch(`http://localhost:3003/rewrite/${address}`,
    const response = await fetch(
      `https://lobster-app-obfjt.ondigitalocean.app/rewrite/${address}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nft: nft,
        }),
      }
    );
    const record = await response.json();
    console.log("Successfully updated document:", record);
    return record;
  } catch (error) {
    console.error("Failed to update document:", error);
  }
};

export default updateNftCount;
