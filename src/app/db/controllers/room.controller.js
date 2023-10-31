var db = require("../models");
var User = db.user;
var Room = db.room;
var Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");

// exports.signup = (req, res) => {
exports.createRoom = (req, res) => {
    if (req.body.user) {
        
        User.findByPk(req.body.user.id)
        .then(user => {

            if (req.body.newRoom)  {
                const newRoom = req.body.newRoom
                
                // NEED TO FIGURE OUT DATE/TIME SITUATION AND ADD INTO CREATE
                Room.create({
                    name: newRoom.name,
                    location: newRoom.location,
                    hostId: user.id
                })
                .then(room => {
                    return res.status(200).send({message: "Room Create!", room})
                })

            } else {
                return res.status(400).send({err:'what room? No Name provided'})
            }
        })
    } else {
        return res.status(400).send({err: "who sent this? No Host provided."})
    }

    // Save User to Database
    // User.create({
    //   username: req.body.username,
    //   name: req.body.name,
    //   email: req.body.email,
    //   password: bcrypt.hashSync(req.body.password, 8)
    // })
    // .then(user => {
    //     if (req.body.roles) {
    //       Role.findAll({
    //         where: {
    //           name: {
    //             [Op.or]: req.body.roles
    //           }
    //         }
    //       })
    //       .then(roles => {
    //         user.setRoles(roles).then(() => {
    //           res.send({ message: "User was registered successfully!" });
    //         });
    //       });
    //     } 
    //     else {
    //       // user role = 1
    //       user.setRoles([1]).then(() => {
    //         res.send({ message: "User was registered successfully!" });
    //       });
    //     }
  
    //   })
    //   .catch(err => {
    //     res.status(500).send({ message: err.message });
    //   });
  };