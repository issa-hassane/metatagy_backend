fetch("https://jsonplaceholder.typicode.com/todos/16o")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    console.log("there was some error  " + response.ok);
    throw new Error("Something went wrong");
  })
  .then((responseJson) => {
    // Do something with the response
    console.log(responseJson);
  })
  .catch((error) => {
    console.log(error.message);
  });
