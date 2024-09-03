require('dotenv').config();

exports.isAdmin = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.ADMIN_API_KEY) {
        return res.status(403).json({ error: 'Access forbidden' });
    }
    next();
};
