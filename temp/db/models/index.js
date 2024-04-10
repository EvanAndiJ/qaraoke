require('dotenv').config({
  debug: true 
})
import * as pg from 'pg';
const config = require('../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  config.db,
  config.user,
  // config.password,
  'Chesntut!',
  {
      host: config.host,
      // dialect: 'postgres',
      dialect: config.dialect,
      dialectModule: pg,
      pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
      },
      logging: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op

db.user = require("./user.model.js")(sequelize, Sequelize)
db.role = require("./role.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);

// db.orderHold.belongsTo(db.user)
// db.orderHold.belongsTo(db.product)

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

// db.room.hasOne(db.user)
// db.user.hasMany(db.room, {
//     foreignKey: {
//         name:'hostId',
//         allowNull: false,
//     }
// })


db.ROLES = ["user", "host", "mod", "admin"];

// module.exports = db;
db.sequelize.sync({alter: true})
// db.sequelize.sync({force: true})
// .then(() => {
//   // console.log('Drop and Resync Db');
//   console.log('adding');
//   initial();
// });

export default db;