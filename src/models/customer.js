const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        address: String,
        phone: Number,
        email: String,
        image: {type: String},
        description: String,
    },
    {
        timestamps: true
    }
);
const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;