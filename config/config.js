require('dotenv').config();

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false // This option is necessary for self-signed certificates
            }
        }
    },
    // You can add configurations for other environments (test, production) if needed
};
