// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const router = express.Router();
// REQUIRE MODULES - INTERNAL
const user = require("../controllers/user");


router.post("/register", user.registerUser);
router.get("/", user.getUsers)
router.post("/login", user.userLogin)
router.get("/logout", user.userLogout)
router.delete("/", user.deleteUsers)
router.get("/:userId", user.getUser)
router.delete("/:userId", user.deleteUser)
router.put("/:userId", user.updateUserRecords)
router.patch("/:userId", user.updateSomeUserRecords)


module.exports = router;
