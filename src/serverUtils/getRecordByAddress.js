const getRecordByAddress = async (address) => {
  try {
    // const response = await fetch(`http://localhost:3003/get/${address}`);

    const response = await fetch(
      `https://lobster-app-obfjt.ondigitalocean.app/get/${address}`
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.error);
    }
    console.log("Response from server: : ", data);
    return data.record;
  } catch (error) {
    console.log(error);
  }
};

export default getRecordByAddress;
