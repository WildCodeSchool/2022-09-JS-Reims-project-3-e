const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const { hashPassword } = require("./auth");
const usersControllers = require("./controllers/userControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const articles = [{ title: "Title", content: "Content" }];

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/api/login", usersControllers.login);
router.post("/users/", hashPassword, usersControllers.add);

router.get("/articles", (req, res) => {
  res.json(articles);
});

module.exports = router;
