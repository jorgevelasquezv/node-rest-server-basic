const Role = require("../models/role");
const User = require("../models/user");

const isRolValid = async (role = "") => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`Role ${role} does not exist in DB`);
  }
};

const emailExists = async (email = "") => {
  const emailSearch = await User.findOne({ email });
    if (emailSearch) {
      throw new Error(`Email ${email} already exists in DB`);
  }
};

const userExists = async (id = "") => {
    const userSearch = await User.findById(id);
    if (!userSearch) {
        throw new Error(`User ${id} does not exist in DB`);
    }
};

module.exports = { isRolValid, emailExists, userExists };
