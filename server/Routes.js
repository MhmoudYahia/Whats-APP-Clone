const express = require("express");
const router = express.Router();

const { addNewMeaage, getAllMessges } = require("./Controllers");

router.route("/messages/new").post(addNewMeaage);
router.route('/messages/sync').get(getAllMessges);


module.exports = router;
