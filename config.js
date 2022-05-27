// LOAD DOTENV
const dotenv = require('dotenv');
dotenv.config();
// REQUIRE MODULES
const port = process.env.PORT || 3000;
const dbURL = process.env.DATABASE_URI
const jwtSecret = process.env.JWT_KEY
const sendGridApiKey = process.env.SENDGRID_API_KEY
const config = {
    port, dbURL, jwtSecret, sendGridApiKey
}
module.exports = config