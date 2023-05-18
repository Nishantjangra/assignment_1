var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.write("Nishant Jangra - 150611200 /n");
    res.write("My favourite movie is Krish");
    res.end();
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
