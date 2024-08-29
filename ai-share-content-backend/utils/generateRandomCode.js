const generateRandomCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Tạo mã 6 chữ số
};

module.exports = generateRandomCode;