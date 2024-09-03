const { Sequelize } = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.development.url);

const User = require('./user')(sequelize);
const Train = require('./train')(sequelize);
const Seat = require('./seat')(sequelize);
const Booking = require('./booking')(sequelize);

User.hasMany(Booking);
Train.hasMany(Seat);
Seat.belongsTo(Train);
Booking.belongsTo(User);
Booking.belongsTo(Train);
Booking.belongsTo(Seat);

sequelize.sync({ alter: true });

module.exports = { sequelize, User, Train, Seat, Booking };
