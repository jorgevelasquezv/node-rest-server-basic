const { Router } = require("express");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", usersGet);

router.put("/:id", usersPut);

router.post("/", usersPost);

router.delete("/:id", usersDelete);

module.exports = router;
