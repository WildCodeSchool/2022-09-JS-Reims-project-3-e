const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const articles = [
  { title: "Lorem ipsum 1", content: "Lorem ipsum 1" },
  { title: "Lorem ipsum 2", content: "Lorem ipsum 2" },
];

router.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = router;
