const User = require("../models/user");

const getUsersAPI = async (req, res) => {
    let result = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: result
    });
}

module.exports = {getUsersAPI};