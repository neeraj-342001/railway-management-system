const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Booking = sequelize.define('Booking', {
        booking_time: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    });

    return Booking;
};
