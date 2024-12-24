const connection = require("../config/database");
const User = require("../models/user");

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

const createUser = async (name, email, city) => {
    // let [result, fields] = await connection.query(
    //     `INSERT INTO users (email, name, city)
    //      VALUES (?, ?, ?)`, [email, name, city]
    // );
    await User.create({
        name: name,
        email: email,
        city: city,
    })
}

const updateUserById = async (name, email, city, userId) => {
    let [result, fields] = await connection.query(
        `UPDATE users
         SET name = ?,
             email = ?,
             city = ?
         WHERE id = ?`, [name, email, city, userId]
    );
}

const deleteUserById = async (userId) => {
    let [result, fields] = await connection.query(
        `DELETE FROM users WHERE id = ?`,[userId]
    );
}

module.exports = {getAllUsers, getUserById,createUser, updateUserById, deleteUserById}