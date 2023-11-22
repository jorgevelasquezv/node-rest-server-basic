const { request, response } = require("express");

const usersGet = (req = request, res = response) => {
    const {name, lastName} = req.query;
  res.json({ msg: "Hello World", name, lastName });
};

const usersPost = (req = request, res = response) => {
  const body = req.body;
  res.status(201).json({ msg: "Hello World", ...body });
};

const usersPut = (req = request, res = response) => {
  const { id } = req.params;
  res.json({ msg: "Hello World", id });
};

const usersDelete = (req = request, res = response) => {
  res.json({ msg: "Hello World" });
};

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersDelete,
};
