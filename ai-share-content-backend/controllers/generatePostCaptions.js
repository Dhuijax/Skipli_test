const config = require('../module/config');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

const GeneratePostCaptions = async (req, res) => {
    const { subject, tone } = req.body;

    try {
    const prompt = `Write few content about ${subject} ${tone}.`;
    const result = await model.generateContent(prompt);
    const resp = result.response.candidates[0].content.parts[0].text;
    const afRemove = resp.replace(/##/g, '').replace(/\*\*|\"/g, '').replace(/\n\n|\n/g, ' ').toString();
    const splitRes = afRemove.replace(/\n+/g, ' ')
                                .replace(/\*\*|\*/g, '').trim();
    
    res.json({ content: splitRes});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = GeneratePostCaptions;