const express = require('express');
const { addTrain, getAvailability } = require('../controllers/trainController');
const { authenticate } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/adminMiddleware');

const router = express.Router();

router.post('/trains', isAdmin, addTrain);
router.get('/trains', authenticate, getAvailability);

module.exports = router;
