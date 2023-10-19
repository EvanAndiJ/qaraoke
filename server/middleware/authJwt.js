const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({
      message: "No token provided!(Verify Token)"
    });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {

    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      return res.status(403).send({ message: "Require Admin Role!" });
      

    });
  });
};

isHost = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "host") {
          next();
          return;
        }
      }
      //did not used to return here. Is that better? We'll see
      return res.status(403).send({ message: "Require Host Role!" });
    });
  });
};
isMod = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "mod") {
          next();
          return;
        }
      }
      //did not used to return here. Is that better? We'll see
      return res.status(403).send({ message: "Require Mod Role!" });
    });
  });
};
isHostOrMod = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "host") {
          next();
          return;
        }
        if (roles[i].name === "mod") {
          next();
          return;
        }
      }
      //did not used to return here. Is that better? We'll see
      return res.status(403).send({ message: "Require Host or Mod Role!" });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isHost: isHost,
  isMod: isMod,
  isHostOrMod: isHostOrMod,
};
module.exports = authJwt;