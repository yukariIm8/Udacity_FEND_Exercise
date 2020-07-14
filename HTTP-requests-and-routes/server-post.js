/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static('website'));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

// GET route
app.get('/all', sendData);

function sendData (request, response) {
  response.send(projectData);
};

// TODO-ROUTES!

/*
1) In the file, server.js, create a POST route that uses the url /add and sends the response POST received when used to make a request.
*/
app.post('/add', callBack);

function callBack (req, res) {
    res.send('POST received');
};

/*
2) Add a POST route for adding a favorite animal via the path ’/animal’ to an array named data. You will need to create the array as well.
*/
data = [];
add.post('/animal', addAnimal);

function addAnimal (req, res) {
    data.push(req.body);
};