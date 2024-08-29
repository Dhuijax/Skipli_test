require('dotenv').config();

module.exports = {
    chunks: [],
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    AUTH_TOKEN: process.env.AUTH_TOKEN,
    ACCOUNT_SID: process.env.ACCOUNT_SID,
    S_ID: process.env.S_ID
};