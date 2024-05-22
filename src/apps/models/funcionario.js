const Sequelize = require('sequelize');
const { Model } = require('sequelize');


class funcionario extends Model {
  static init(sequelize) {
    super.init(
      {
        idade: Sequelize.INTEGER,
        nome: Sequelize.STRING,
        cargo: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );


    return this;
  }
}

module.exports = funcionario;