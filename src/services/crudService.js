const connection = require("../config/database")

const getAllUsers = async () => {
    let [result, fields] = await connection.query(`SELECT * FROM users`);
    return result;
}

const getUserById = async (userID) => {
    let [result, fields] = await connection.query(
        `SELECT * FROM users WHERE id = ?`, [userID]
    );
    return result && result.length > 0 ? result[0] : {};
}

module.exports = {getAllUsers, getUserById}