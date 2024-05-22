const Sequelize = require('sequelize');
const databaseConfig = require('../configs/db');

const funcionario = require('../apps/models/funcionario');


const models = [funcionario];


class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection));
      //.map(model => model.associate && model.associate(this.connection.models));
  }
}

module.exports = new Database();