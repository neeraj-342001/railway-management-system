const express = require('express');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

app.use('/api', authRoutes);
app.use('/api', trainRoutes);
app.use('/api', bookingRoutes);

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
