//  Configure the environment variables
var path = require('path')
const mockAPIResponse = require('./mockAPI.js')

const PORT = 8080
//  Configure express to use body-parser as middle-ware.
const express = require('express')
const app = express()

//  add Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'

//  Configure cors to avoid cors-origin issue
const cors = require("cors");
app.use(cors());

 const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
app.use(bodyParser.json())

const axios = require('axios');


// Configure express static directory.
app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'));
    res.send('Hello World!')
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/sentiment', async (req, res) => {
    try {

        //  GET the url from the request body
        apiKey = process.env.API_KEY;
        // Fetch Data from API
        const apiRes = await axios.get(
             `${baseUrl}?key=${apiKey}&url=${req.body.url}&lang=en`
        );
        //  Send it to the client
        const {
            text,
            score_tag,
            agreement,
            subjectivity,
            confidence,
            irony
        } = apiRes.data;

        res.send({
            agreement,
            subjectivity,
            confidence,
            irony
        })
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
});

// export app to use it in the unit testing
module.exports = app;