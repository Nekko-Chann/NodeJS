const Task = require('../models/task');
const aqp = require('api-query-params');

const getAllTask = async (queryString) => {
    try {
        const page = queryString.page;
        const {filter, limit, population} = aqp(queryString);
        delete filter.page;
        let offset = (page - 1) * limit;
        return await Task.find(filter).populate(population).skip(offset).limit(limit).exec();
    } catch (err) {
        return null;
    }
}

const createTask = async (data) => {
    try {
        if (data.type === "EMPTY-TASK") {
            return await Task.create(data);
        }
    } catch (err) {
        return null;
    }
}

const updateTask = async (data) => {
    try {
        return await Task.updateOne({_id: data.id}, {...data})
    } catch (err) {
        return null;
    }
}

const deleteTask = async (id) => {
    try {
        return await Task.deleteById(id)
    } catch (err) {
        return null;
    }
}

module.exports = {getAllTask, createTask, updateTask, deleteTask}