const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
      this.port = process.env.PORT;
      this.usersPath = '/api/users'

    //Middlewares
    this.middleware();

    //Rutas de mi aplicación
    this.routes();
  }

  middleware() {
    // Cors
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
