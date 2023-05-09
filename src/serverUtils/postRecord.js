const postRecord = async (address) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ address }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    // const response = await fetch(`http://localhost:3003/`, requestOptions);

    const response = await fetch(
      `https://clownfish-app-z2nhn.ondigitalocean.app`,
      requestOptions
    );
    const data = await response.json();
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    console.log("Response from server: : ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default postRecord;
