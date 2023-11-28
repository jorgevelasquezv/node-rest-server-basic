const validateFields = require('../middlewares/validate-fields');
const validateJWT = require('../middlewares/validate-jwt');
const validateRoles = require('../middlewares/validated-roles');
const validateId = require('../middlewares/validate-id');

module.exports = {
    ...validateFields,
    ...validateJWT,
    ...validateRoles,
    ...validateId,
};
