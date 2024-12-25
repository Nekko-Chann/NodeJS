const Customer = require('../models/customer');

const createCustomer = async (customerData) => {
    console.log(customerData);
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
        console.error(err);
        return null;
    }
}

module.exports = {createCustomer, createArrayCustomer}