/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  }
  
  // TODO-Call Function
  /*
  1) In the file named app.js, which is located in the website directory of this project, call the function postData with the url /addAnimal and the name of your favorite animal to create a POST request that uses the POST route you setup in server.js.
  */
postData('/addAnimal', {animal: 'dog'})
  