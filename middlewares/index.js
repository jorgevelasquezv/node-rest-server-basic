const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validatedRoles = require('../middlewares/validated-roles');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validatedRoles,
};
