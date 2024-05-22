require('dotenv').config();
module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
  define: {
    timestamps: false,
    freezeTableName: true
  },
  logging: false
};
console.log(`usuario: ${process.env.DB_USERNAME}`);

