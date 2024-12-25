const Customer = require('../models/customer');

const getAllCustomer = async () => {
    try {
        return await Customer.find({});
    } catch (err) {
        return null;
    }
}

const createCustomer = async (customerData) => {
    try {
        return await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image,
        });
    } catch (err) {
        return null;
    }
}

const createArrayCustomer = async (array) => {
    try {
        return await Customer.insertMany(array);
    } catch (err) {
        return null;
    }
}

const updateCustomer = async (customerData) => {
    try {
        return await Customer.updateOne({
            _id: customerData.id
        }, {
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
        })
    } catch (err) {
        return null;
    }
}

const deleteCustomer = async (id) => {
    try {
        return await Customer.deleteById(id);
    } catch (err) {
        return null;
    }
}

const deleteArrayCustomer = async (array) => {
    try {
        return await Customer.deleteById(array);
    } catch (err) {
        return null;
    }
}

module.exports = {
    getAllCustomer, createCustomer, createArrayCustomer,
    updateCustomer, deleteCustomer, deleteArrayCustomer
}