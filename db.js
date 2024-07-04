const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  "piratebot", // название базы данных
  "pirate", // имя пользователя
  "suvDcWTMAVyB", // пароль
  {
    host: "192.168.0.26",
    port: "5432",
    dialect: "postgres",
  }
);
