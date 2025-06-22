const express = require('express');
const airplaneRouter = require('./airplane-route');
const { InfoController } = require('../../controllers');

const router = express.Router();
router.use('/airplanes', airplaneRouter);
router.get('/info', InfoController.info);

module.exports = router;