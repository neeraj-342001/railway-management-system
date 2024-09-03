const express = require('express');
const { bookSeat, getBookingDetails } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/bookings', authenticate, bookSeat);
router.get('/bookings/:id', authenticate, getBookingDetails);

module.exports = router;
