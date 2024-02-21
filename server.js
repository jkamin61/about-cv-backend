const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connection = mongoose.connect(MONGO_DB_URL, {
    useUnifiedTopology: true,
    dbName: 'about-cv',
    useNewUrlParser: true,
});

connection
    .then(() => {
        app.listen(PORT, async () => {
            console.log(`Server running. Port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(`Server not running. Error message: ${err.message}`);
        process.exit(1);
    });