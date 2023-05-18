var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default URL path
app.get("/", (req, res) => {
    res.send("Nishant Jangra - 150611200<br>My favourite movie is Krish"); // Use <br> for a line break
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
