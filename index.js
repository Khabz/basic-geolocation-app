const express = require("express");
const app = express();
const port = 3000;
const unirest = require("unirest");
require('dotenv').config()

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.get("/", (req, res) => {
    var apiCall = unirest("GET",
        "http://ipwhois.app/json/"
    );
    apiCall.end(function(result) {
        if (res.error) throw new Error(result.error);
        console.log(result.body);
        res.send(result.body);
    });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));