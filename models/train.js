const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Train = sequelize.define('Train', {
        train_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        source_station: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destination_station: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_seats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Train;
};
