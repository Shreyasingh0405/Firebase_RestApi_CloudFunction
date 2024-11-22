const express = require("express");
const router = express.Router();

const {
    saveUserData,
    getUserData,
    updateUserData,
    deleteUserData,
} = require("../controllers/user");

router.post("/users", saveUserData);
router.get("/users", getUserData);
router.post("/updateUsers", updateUserData);
router.post("/deleteUsers", deleteUserData);

module.exports = router;
