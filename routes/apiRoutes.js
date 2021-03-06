const router = require("express").Router();
const Book = require("../models/book.js");

router.post("/books", ({ body }, res) => {
  const {bookData} = body;
  console.log(bookData);
  Book.create(bookData)
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});


router.get("/books", (req, res) => {
  Book.find({})
    .then(dbBook => {
      res.json(dbBook);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  Book.findOneAndDelete({ _id: id })
    .then( async () => {
      const updatedList = await Book.find({});
      res.json(updatedList);
      //res.status(200)
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
    });
});

module.exports = router;
