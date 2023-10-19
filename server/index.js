require('dotenv').config({
    debug: false 
  })
  const path = require('path')
  const express = require('express');
  const cors = require('cors')
  const bodyParser = require('body-parser')
  const app = express();
  const db = require("./models");
  const corsOptions = {
    origin: ["https://localhost:8001"]
  };
  app.use(cors(corsOptions))
  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../client/build')))
  
  db.sequelize.sync({alter: true})
  // const Role = db.role;
  // function initial() {
  //   Role.create({
  //     id: 1,
  //     name: "user"
  //   });
  //   Role.create({
  //     id: 2,
  //     name: "host"
  //   });
  //   Role.create({
  //     id: 3,
  //     name: "mod"
  //   });
  //   Role.create({
  //     id: 4,
  //     name: "admin"
  //   });
  // }
  // db.sequelize.sync({force: true}).then(() => {
  //   console.log('Drop and Resync Db');
  //   initial();
  // });
  
  
  require('./routes/user.routes')(app);
  require('./routes/auth.routes')(app);
  require('./routes/room.routes')(app);
  
  app.get('*', (req, res) => {
    process.env.NODE_ENV === 'production'
      ? res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
      : res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'))
  }); 
  
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));