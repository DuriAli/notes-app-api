const { getNotes, getSingleNote, updateNote, createNote, deleteNote } = require("./notes.service");

module.exports = {
    createNoteRoute: (req, res) => {
        const body = req.body;
        console.log(body)
        createNote(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error"
                })
            }

            return res.status(200).json({ success: 1, data: results })
        })
    },
    getAllNotesRoute: (req, res) => {
        getNotes((err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error"
                })
            }

            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Results not found"
                })
            }

            return res.status(200).json({ success: 1, data: results })
        })
    },
    getSingleNoteRoute: (req, res) => {
        let id = parseInt(req.params.noteID);
        getSingleNote(id, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Error"
                })
            }

            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Results not found"
                })
            }

            return res.status(200).json({ success: 1, data: results[0] })
        })
    },
    updateNoteRoute: (req, res) => {
        const body = {
            noteID: req.params.noteID,
            noteTitle: req.body.noteTitle,
            noteBody: req.body.noteBody
        }
        console.log(body);
        updateNote(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }

            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found"
                })
            }

            return res.status(200).json({
                success: 1,
                data: "updated successfully"
            });
        });
    },
    deleteNoteRoute: (req, res) => {
        const noteID = req.params.noteID;

        deleteNote(noteID, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: "List deleted successfully"
            });
        });
    },
};