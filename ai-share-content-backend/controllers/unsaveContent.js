const User = require('../models/user');

const UnSaveContent = async (req, res) => {
    const { topic, phoneNumber } = req.body;
    try {
        const result = await User.findOneAndUpdate(
            { phoneNumber: phoneNumber,
                'generatedContents.topic': topic },
            { $pull: { generatedContents: { topic } } }
        );
        res.json({ success: true, count_result: result.modifiedCount });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = UnSaveContent;