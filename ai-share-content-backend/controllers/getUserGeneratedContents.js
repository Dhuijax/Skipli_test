const User = require('../models/user');

const GetUserGeneratedContents = async (req, res) => {
    //const { phone_number } = req.query;

    try {

        const user = await User.find();
        res.json(user);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = GetUserGeneratedContents;