const {uploadSingleFile} = require("../services/fileService");
const {
    getAllCustomer, createCustomer, createArrayCustomer,
    updateCustomer, deleteCustomer, deleteArrayCustomer
} = require("../services/customerService");
const Joi = require('joi');

const GetCustomersAPI = async (req, res) => {
    let {limit, page, name} = req.query;
    let result = null;
    if (limit && page) {
        result = await getAllCustomer(limit, page, name, req.query);
    } else {
        result = await getAllCustomer();
    }
    return res.status(200).json({
        errorCode: 0,
        data: result,
    });
}

const CreateCustomersAPI = async (req, res) => {
    let {name, address, phone, email, description} = req.body;
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        address: Joi.string(),
        phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
        email: Joi.string().email(),
        description: Joi.string(),
    })
    const {error} = schema.validate(req.body);
    if (error) {
        //return error
    } else {
        let imageURL = '';
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        } else {
            let result = await uploadSingleFile(req.files.image);
            imageURL = result.path;
        }
        let customerData = {name, address, phone, email, description, image: imageURL};
        let customer = await createCustomer(customerData);
        return res.status(200).json({
            errorCode: 0,
            data: customer,
        });
    }
}

const CreateManyCustomersAPI = async (req, res) => {
    let {customers} = req.body;
    let customer = await createArrayCustomer(customers);
    if (customer) {
        return res.status(200).json({
            errorCode: 0,
            data: customer,
        });
    } else {
        return res.status(400).json({
            errorCode: -1,
            data: customer,
        });
    }
}

const UpdateCustomersAPI = async (req, res) => {
    let {name, address, phone, email, description, id} = req.body;
    let customerData = {name, address, phone, email, description, id};
    let customer = await updateCustomer(customerData);
    return res.status(200).json({
        errorCode: 0,
        data: customer,
    })
}

const DeleteCustomerAPI = async (req, res) => {
    let {id} = req.body;
    let customer = await deleteCustomer(id);
    return res.status(200).json({
        errorCode: 0,
        data: customer,
    })
}

const DeleteManyCustomersAPI = async (req, res) => {
    const {customersId} = req.body;
    let customer = await deleteArrayCustomer(customersId);
    if (customer) {
        return res.status(200).json({
            errorCode: 0,
            data: customer,
        });
    } else {
        return res.status(400).json({
            errorCode: -1,
            data: customer,
        });
    }
}

module.exports = {
    GetCustomersAPI, CreateCustomersAPI, CreateManyCustomersAPI,
    UpdateCustomersAPI, DeleteCustomerAPI, DeleteManyCustomersAPI
};