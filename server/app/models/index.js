const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.type = require("./type.model")(sequelize, Sequelize);
db.laptop = require("./laptop.model.js")(sequelize, Sequelize);
db.brand = require("./brand.model")(sequelize, Sequelize);
db.processor = require("./processor.model")(sequelize, Sequelize);
db.ram = require("./ram.model")(sequelize, Sequelize);
db.storage = require("./storage.model")(sequelize, Sequelize);

db.type.hasOne(db.laptop);
db.laptop.belongsTo(db.type, {foreignKey: "type_id"});

module.exports = db;