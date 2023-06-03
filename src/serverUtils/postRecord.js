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
      // `https://clownfish-app-z2nhn.ondigitalocean.app`,
      "https://sea-lion-app-39uur.ondigitalocean.app/",
      requestOptions
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default postRecord;
