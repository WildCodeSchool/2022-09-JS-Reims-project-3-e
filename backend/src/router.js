const express = require("express");

const router = express.Router();

const communicationPlansControllers = require("./controllers/communicationPlansControllers");
const { hashPassword } = require("./auth");
const usersControllers = require("./controllers/userControllers");
const commentariesControllers = require("./controllers/commentariesControllers");

router.get("/communication-plans", communicationPlansControllers.browse);
router.get("/communication-plans/:id", communicationPlansControllers.read);
router.put("/communication-plans/:id", communicationPlansControllers.edit);
router.post("/communication-plans", communicationPlansControllers.add);
router.delete(
  "/communication-plans/:id",
  communicationPlansControllers.destroy
);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/api/login", usersControllers.login);
router.post("/users/", hashPassword, usersControllers.add);
router.put("/users/:id", usersControllers.edit);
router.delete("/users/:id", usersControllers.destroy);

router.get("/commentaries", commentariesControllers.browse);
router.get("/commentaries", commentariesControllers.read);
router.get("/commentaries", commentariesControllers.edit);

module.exports = router;
