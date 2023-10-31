var db = require("../models");
var User = db.user;
var Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");


exports.updateInfo = async (req, res) => {
  const userId = req.body.userInfo.id
  const user = await User.findOne({
    where: {
      id: userId
    }
  })
  if (!user) { return res.status(400).send({message: 'User not found'})}

  const oldUsername = user.username;
  const newUser = req.body.username;
  
  const oldEmail = user.email;
  const newEmail = req.body.email;
      
  const updateInfo = async (newStuff) => {
    const [u,e] =  newStuff
    return await User.update({ username: u, email: e },
      { where: { id: userId } }
    )
  };
  let toUpdate = [];
  toUpdate.push(oldUsername != newUser ? newUser : oldUsername);
  toUpdate.push(oldEmail != newEmail ? newEmail : oldEmail);
  updateInfo(toUpdate)
  return res.status(200).send({message: 'success', ok: true});
}
exports.updatePassword = async (req, res) => {
  const userId = req.body.userInfo.id
  const user = await User.findOne({
    where: {
      id: userId
    }
  })
  if (!user) { return res.status(400).send({ message: 'User not found', ok: false})}
  // .then(user => { if (user) {
  const prevP = req.body.prevPass
  const newP = req.body.newPass
  const isValid = bcrypt.compareSync(
    prevP,
    user.password
  )
  if (!isValid) {
    return res.status(401).send({ message:'Previous Password Incorrect!', ok: false})
  } else {
    User.update({ password: bcrypt.hashSync(newP, 8) },
      { where: { id: userId } }
    )
    return res.status(200).send({message:'Pasword successfully updated!', ok: true})
  }
  
}
exports.deleteUser = async (req, res) => {
  const userInfo = req.body.userInfo
  const userId =  req.body.userInfo.id
  
  const user = await User.findOne({
    where: {
      id: userId
    }
  })
  if (!user) { return res.status(400).send({message: 'User not found'})}

  // .then(user => {
  const password = req.body.password
  const isValid = bcrypt.compareSync(
    password,
    user.password
  )
  if (!isValid) { 
    return res.status(401).send({message:'Password Incorrect!'})
  }
  User.destroy({ where: { id: userId }, cascade:true })
  
  return res.status(200).send({message: 'Account deleted-_-'});
  
}

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};