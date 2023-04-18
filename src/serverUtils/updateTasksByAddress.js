 const updateTasksByAddress = async (address, task, exp) => {
    const requestOptions =  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task, exp })
    };
    try {
      const response = await fetch(`http://localhost:3003/update/${address}`, requestOptions);
      const {record} = await response.json();
      return {record}
      if (response.ok) {
        console.log("New complited task added and exp increased");
      } else {
        console.log("Error adding task to record");
      }
    } catch (err) {
      console.log("Error adding task to record");
    }
  }

 export default updateTasksByAddress;