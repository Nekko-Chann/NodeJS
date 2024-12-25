const User = require("../models/user");

const getUserById = async (userID) => {

}

const createUser = async (name, email, city) => {
    await User.create({
        name: name,
        email: email,
        city: city,
    })
}

const updateUserById = async (name, email, city, userId) => {

}

const deleteUserById = async (userId) => {

}

module.exports = {getUserById, createUser, updateUserById, deleteUserById}