const pool = require("../db/database");

module.exports = {
    createNote: (data, callBack) => {
        pool.query(
            `insert into notes(noteTitle, noteBody) 
                    values(?,?)`,
            [
                data.noteTitle,
                data.noteBody,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getNotes: (callback) => {
        pool.query("select * from notes",
            (error, results, field) => {
                if (error) {
                    console.log(error);
                }

                return callback(null, results);
            })
    },
    getSingleNote: (noteID, callback) => {
        pool.query("select * from notes where noteID=?",
            [noteID],
            (error, results, field) => {
                if (error) {
                    console.log(error);
                }

                return callback(null, results);
            })
    },
    updateNote: (data, callBack) => {
        pool.query(
            `update notes set noteTitle=?, noteBody=? where noteID=?`,
            [
                data.noteTitle,
                data.noteBody,
                data.noteID
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteNote: (noteID, callBack) => {
        pool.query(
            `delete from notes where noteID=?`,
            [
                noteID,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
};