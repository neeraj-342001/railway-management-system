const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Seat = sequelize.define('Seat', {
        seat_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_booked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    return Seat;
};
