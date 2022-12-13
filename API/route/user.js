const express = require('express');
const { addUser, getUser } = require('../controller/user');
const router = express.Router();

router.route("/user").post(addUser);
router.route("/user").get(getUser);

module.exports = router;