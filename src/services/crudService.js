const connection = require("../config/database")

const getAllUsers = async () => {
    let [result, fields] = await connection.query(`SELECT * FROM users`);
    return result;
}

module.exports = {getAllUsers}