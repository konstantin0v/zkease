const postRecord = async (address, exp, tasks, nfts) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ address, exp, tasks, nfts }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    //const response = await fetch(`http://localhost:3003/`, requestOptions);

    const response = await fetch(
      `https://lobster-app-obfjt.ondigitalocean.app/`,
      requestOptions
    );
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.error);
    }
    console.log("Response from server: : ", data);
  } catch (error) {
    console.log(error);
  }
};
export default postRecord;
