const { authJwt } = require("../middleware");
const roomCon = require("../controllers/room.controller");
module.exports = function(app) {

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});


app.post("/api/room/create",
  [
    authJwt.verifyToken,
  ],
  roomCon.createRoom
);

};