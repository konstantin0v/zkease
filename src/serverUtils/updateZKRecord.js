export const updateZKRecord = async(address, exp, taskPath, value) => {
    const response = await fetch(`http://localhost:3003/update/${address}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exp: exp,
        taskPath: taskPath,
        value: value
      })
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  
    const updatedRecord = await response.json();
    return updatedRecord;
  }