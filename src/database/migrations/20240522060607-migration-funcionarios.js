module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('funcionario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,
      },
      cargo: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('funcionario');
  },
};