require('dotenv').config();
const express = require("express");
var cors = require('cors');
const app = express();
const { getDocument } = require("./db/database");

app.use(cors());
app.use(express.json());

const notesRouter = require("./api/notes.router");

app.use("/notes", notesRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server Running on " + process.env.SERVER_PORT)
})