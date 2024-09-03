const { Booking, Seat, Train } = require('../models');

exports.bookSeat = async (req, res) => {
    const { train_id } = req.body;
    const user_id = req.user.id;

    const transaction = await Booking.sequelize.transaction();
    try {
        const seat = await Seat.findOne({
            where: { train_id, is_booked: false },
            lock: transaction.LOCK.UPDATE,
        });

        if (!seat) {
            return res.status(400).json({ error: 'No available seats' });
        }

        seat.is_booked = true;
        await seat.save({ transaction });

        const booking = await Booking.create({ user_id, train_id, seat_id: seat.id }, { transaction });

        await transaction.commit();
        res.status(201).json({ message: 'Seat booked successfully', booking });
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ error: 'Booking failed' });
    }
};

exports.getBookingDetails = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user.id;

    try {
        const booking = await Booking.findOne({
            where: { id, user_id },
            include: [Train, Seat]
        });

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.json(booking);
    } catch (error) {
        res.status(500).json({ error: 'Fetching booking details failed' });
    }
};
