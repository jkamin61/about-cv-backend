const Users = require('../schemas/users.schema');

const findUserByEmail = async (email) => {
    return Users.findOne({email});
}

const addEmailToWaitlist = async (email) => {
    return Users.create({email});
}

const getAllUsers = async () => {
    return Users.find({});
}

module.exports = {
    findUserByEmail,
    addEmailToWaitlist,
    getAllUsers
}