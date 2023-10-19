var db = require("../models");
var User = db.user;
var Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");

// exports.signup = (req, res) => {
exports.createRoom = (req, res) => {
    // Save User to Database
    User.create({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          })
          .then(roles => {
            user.setRoles(roles).then(() => {
              res.send({ message: "User was registered successfully!" });
            });
          });
        } 
        else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        }
  
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };