const express = require("express");
const router = express.Router();
const Book = require("../models/book");

//All Books Route
router.get("/", async (req, res) => {});

// New Author Route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create Author Route
router.post("/", async (req, res) => {
  //   let locals = { errorMessage: "Error Creating Author..." };
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    res.render("authors");
  } catch {
    // res.render("authors/new", locals);
    res.render("authors/new", {
      author: author,
      errorMessage: "Something went wrong...",
    });
  }
});

module.exports = router;
