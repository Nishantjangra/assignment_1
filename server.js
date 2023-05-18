/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: Nishant Jangra Student ID: 150611200 Date: 18th May 2023 *
* Online (Cyclic) URL: https://eel-lingerie.cyclic.app/
* ********************************************************************************/


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default URL path
app.get("/", (req, res) => {
    res.send("Nishant Jangra - 150611200<br>My favourite movie is Krish"); // Use <br> for a line break
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
