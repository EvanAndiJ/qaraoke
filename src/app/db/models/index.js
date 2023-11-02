import * as pg from 'pg';
const config = require('../config/db.config')
const bcrypt = require("bcryptjs");
const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'postgres://postgres:Chestnut!@localhost:5432/qaraoke',
    {
        // host: config.host,
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

module.exports = db;


  const User = db.user;
  // const Role = db.role;
  const Room = db.room;
  function initial() {
    // Role.create({
    //   id: 1,
    //   name: "user"
    // });
    // Role.create({
    //   id: 2,
    //   name: "host"
    // });
    // Role.create({
    //   id: 3,
    //   name: "mod"
    // });
    // Role.create({
    //   id: 4,
    //   name: "admin"
    // });
    // Room.create({
    //   name: "ken"
    // });
    // Room.create({
    //   name: "abby",
    // });
    User.create({
      name: "user",
      username: 'user',
      email: 'user@asleepies.com',
      password: bcrypt.hashSync('Chestnut!', 8)
    });
    User.create({
      name: "host",
      username: 'host',
      email: 'host@asleepies.com',
      password: bcrypt.hashSync('Chestnut!', 8)
    });
    User.create({
      name: "mod",
      username: 'mod',
      email: 'mod@asleepies.com',
      password: bcrypt.hashSync('Chestnut!', 8)
    });
    User.create({
      name: "admin",
      username: 'admin',
      email: 'admin@asleepies.com',
      password: bcrypt.hashSync('Chestnut!', 8)
    });
  }
  db.sequelize.sync({alter: true})
  // db.sequelize.sync({force: true})
  // .then(() => {
  //   // console.log('Drop and Resync Db');
  //   console.log('adding');
  //   initial();
  // });