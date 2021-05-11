const path = require("path");

module.exports = (app) => {
    // Route for notes HTML
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // Route for index HTML
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}