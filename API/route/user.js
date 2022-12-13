const express = require('express');
const { addUser, getAllUser, getUser, editUser, deleteUser } = require('../controller/user');
const router = express.Router();

router.route("/user").post(addUser);
router.route("/user").get(getAllUser);
router.route("/user/:id").get(getUser);
router.route("/user/:id").put(editUser);
router.route("/user/:id").delete(deleteUser);

module.exports = router;