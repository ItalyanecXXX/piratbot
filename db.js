const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  "piratebot", // название базы данных
  "pirate", // имя пользователя
  "suvDcWTMAVyB", // пароль
  {
    host: "master.36009046-78b0-4a16-8ea6-2cf4bd5ec58a.c.dbaas.selcloud.ru",
    port: "5432",
    dialect: "postgres",
  }
);
