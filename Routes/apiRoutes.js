
const fs = require("fs");
const savedNotes = require("../db/db.json");

module.exports = (app) => {
    function notes(userInput) {
        userInput = JSON.stringify(userInput);
        fs.writeFileSync("./db/db.json", userInput, (err) =>  {
            if (err) {
                return console.log(err);
            }
        });
    }

    app.get("/api/notes", function (req, res) {
        res.json(savedNotes);
    });
    app.post("/api/notes", function (req, res) {
        if (savedNotes.length == 0) {
            req.body.id = "0";
        } else {
            req.body.id = JSON.stringify(JSON.parse(savedNotes[savedNotes.length - 1].id) + 1);
        }
        savedNotes.push(req.body);
        notes(savedNotes);
        res.json(req.body);
    });

};