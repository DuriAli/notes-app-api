const router = require('express').Router();
const { createNoteRoute, updateNoteRoute, deleteNoteRoute, getAllNotesRoute, getSingleNoteRoute } = require("./notes.controller");

router.get("/", getAllNotesRoute);
router.get("/:noteID", getSingleNoteRoute);

router.post("/", createNoteRoute);

router.patch("/:noteID", updateNoteRoute);

router.delete("/:noteID", deleteNoteRoute);

module.exports = router;