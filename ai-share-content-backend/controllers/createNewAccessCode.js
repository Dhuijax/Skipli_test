const twilio = require('twilio');
const config = require('../module/config');
const generateRandomCode = require('../utils/generateRandomCode');

const CreateNewAccessCode = async (req, res) => {
    const { phoneNumber } = req.body;
    const accessCode = generateRandomCode();
    const client = new twilio(config.ACCOUNT_SID, config.AUTH_TOKEN);

    try {
        const verification = await client.verify.v2.services(config.S_ID).verifications.create({
            to: phoneNumber,
            channel: "sms",
        });
        res.json({ status: true, id: verification.sid });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = CreateNewAccessCode;