// Require Dependencies & Use Router
const express = require('express');
const router = express.Router();

// Require Controller ...
const notificationController = require('../controller/notificationController')

// API ...
router.post("/sendToAll", notificationController.sendNotify )

module.exports = router;
