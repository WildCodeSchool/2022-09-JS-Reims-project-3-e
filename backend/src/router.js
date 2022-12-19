const express = require("express");

const router = express.Router();

const articleControllers = require("./controllers/articleControllers");

router.get("/articles", articleControllers.browse);
router.get("/articles/:id", articleControllers.read);
router.put("/articles/:id", articleControllers.edit);
router.post("/articles", articleControllers.add);
router.delete("/articles/:id", articleControllers.destroy);

const articles = [{ title: "Title", content: "Content" }];
const usersControllers = require("./controllers/userControllers");

router.get("/users", usersControllers.browse);

router.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = router;
