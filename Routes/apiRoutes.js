const fs = require("fs");

const dbJSON = require('./db/db.json');
 
module.exports = (app) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    app.get("/api/notes", (req, res) => {
        return res.json(savedNotes);
    });
    app.post('/api/notes', (req, res) => {
        let finalID;
        if (savedNotes.length) {
            finalID = Math.max(...(savedNotes.map(note => note.id)));
        } else {
            finalID = 0;
        }
        const noteID = finalID + 1;
        savedNotes.push({ noteID, ...req.body });
        res.json(noteList.slice(-1));
    });
};