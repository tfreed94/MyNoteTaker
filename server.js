const express = require("express");
const app = express();

// Setting port to 4500
const PORT = process.env.PORT || 4500;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Require API and HTML routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
app.use(express.static("public"));

// Listener for port 4500
app.listen(PORT, function() {
    // Console Log port 4500
    console.log("App listening on PORT: " + PORT);
});