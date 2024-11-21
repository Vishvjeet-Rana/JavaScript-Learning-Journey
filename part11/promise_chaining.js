function saveData(data) {
  return new Promise((resolve, reject) => {
    let flag = Math.floor(Math.random() * 2);
    if (flag === 0) {
      resolve("Saved successfully.");
    } else {
      reject("Poor internet connection");
    }
  });
}

saveData("All files are saved through MongoDB")
  .then((message) => {
    console.log("Data 1", message);
    return saveData("Sending req for data 2");
  })
  .then((message) => {
    console.log("Data 2", message);
    return saveData("Sending req for data 3");
  })
  .then((message) => {
    console.log("Data 3", message);
  })
  .catch((error) => {
    console.log("rejected", error);
  });
