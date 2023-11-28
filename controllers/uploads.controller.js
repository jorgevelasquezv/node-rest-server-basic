const { response, request } = require('express');
const { uploadFile } = require('../helpers');

const uploadFiles = async (req = request, res = response) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        res.status(400).json({
            msg: 'No files were uploaded.',
        });
        return;
    }

    try {
        const name = await uploadFile(req.files);
        res.json({
            name,
        });
    } catch ({ message }) {
        res.status(400).json({ message });
    }
};

module.exports = {
    uploadFiles,
};
