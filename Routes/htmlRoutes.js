const notePath = require("path");

module.exports = function(){
    app.get("/notes", function(req, res){
        res.sendFile(notePath.join(__dirname, "../public/notes.html"));
    });
    app.get("/", function(req, res){
        res.sendFile(NotePath.join(__dirname, "../public/index.html"));
    });
}