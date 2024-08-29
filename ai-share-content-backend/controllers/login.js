const User = require('../models/user');

const Login = async (req, res) => {
    const { phoneNumber } = req.body;
    try {
            const user = await User.findOne({ phoneNumber });
            if (user) {
                res.json({ success: true, message: "Login success!" });
            } else {
                res.json({ success: false, message: "Login false!" });
            }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = Login;