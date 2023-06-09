export const bonusExp = async (address, exp, jwt) => {
  try {
    // const response = await fetch(
    //   `http://localhost:3003/bonus/${address}`,

    const response = await fetch(
      `https://sea-lion-app-39uur.ondigitalocean.app/bonus/${address}`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          exp: exp,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const updatedRecord = await response.json();
    return updatedRecord;
  } catch (error) {
    console.log(error);
  }
};
