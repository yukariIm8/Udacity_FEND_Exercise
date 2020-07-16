// TODO
/*
1) In the file getPost.js (located in the website directory of this project), write an async function to make a POST request that has two arguments: a url to make the POST to, and a JavaScript object holding the data to post.
*/

const postData = async ( url = '', data = {}) => {
    const response = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), //body data type must match "Content-Type" header
    });
    
    try {
        const newData = await response.json();
        return newData
    } catch(error) {
        console.log("error", error);
    }
}

// TODO-Async GET
/*
1) In the file getPost.js, write an async function to make a GET request that has one argument: a url to make the GET request to.

Hint - Fetch is your friend.
*/

const getData = async (url = '') => {
    const request = await fetch(url);
    try {
        // Transform into JSON
        const allData = await request.json()
    } catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

// TODO-Chain your async functions to post an animal then GET the resulting data
/*
1) In the file getPost.js, write a function that chains together the two async functions you have previously written, so that you make a POST request to the /animal route, and then retrieve the data with a GET request to the /all path.

You should pass in a data object of your favorite animal as the second argument for the POST request.
*/
function postGet() {
    postData('/animal', {fav:'lion'})
    .then(function(data){
        retrieveData('/all')
    })
}


// TODO-Call the chained function
// Call your function as the last line of code in the file named
postGet()