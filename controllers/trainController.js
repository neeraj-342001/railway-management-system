const { Train, Seat } = require('../models');

exports.addTrain = async (req, res) => {
    const { train_name, source_station, destination_station, total_seats } = req.body;
    try {
        const train = await Train.create({ train_name, source_station, destination_station, total_seats });
        for (let i = 1; i <= total_seats; i++) {
            await Seat.create({ train_id: train.id, seat_number: i });
        }
        res.status(201).json({ message: 'Train added successfully', train });
    } catch (error) {
        res.status(500).json({ error: 'Adding train failed' });
    }
};

exports.getAvailability = async (req, res) => {
    const { source_station, destination_station } = req.query;
    try {
        const trains = await Train.findAll({
            where: { source_station, destination_station },
            include: [{ model: Seat, where: { is_booked: false }, required: false }]
        });
        res.json(trains);
    } catch (error) {
        res.status(500).json({ error: 'Fetching availability failed' });
    }
};
