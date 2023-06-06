export const updateZKRecord = async (address, exp, taskPath, value, jwt) => {
  try {
    // const response = await fetch(
    //   `http://localhost:3003/update/${address}`,

    const response = await fetch(
      //  `https://clownfish-app-z2nhn.ondigitalocean.app/update/${address}`,
      `https://sea-lion-app-39uur.ondigitalocean.app/update/${address}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          exp: exp,
          taskPath: taskPath,
          value: value,
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
