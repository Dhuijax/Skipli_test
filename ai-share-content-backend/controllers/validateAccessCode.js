const User = require('../models/user');
const config = require('../module/config');
const twilio = require('twilio');

const ValidateAccessCode = async (req, res) => {
    const { accessCode, phoneNumber } = req.body;
    const client = new twilio(config.ACCOUNT_SID, config.AUTH_TOKEN);
    try {
        const verificationCheck = await client.verify.v2.services(config.S_ID)
                .verificationChecks.create
                ({
                    code: accessCode,
                    to: phoneNumber,
                });

        if (verificationCheck.status === "approved")
        {
            const user = await User.findOne({ phoneNumber });
            if (user) {
                res.json({ status: true, message: "Phone number already exists!" });
            } else {
                await User.findOneAndUpdate(
                    { phoneNumber },
                    { accessCode },
                    { upsert: true }
                );
                res.json({ 
                        status: true, 
                        status_api: verificationCheck.status,
                        valid: verificationCheck.valid,
                        message: "Successfully saved phone number to Ai Content!" });
            }
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = ValidateAccessCode;