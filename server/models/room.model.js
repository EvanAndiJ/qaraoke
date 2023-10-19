module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("rooms", {
      name: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      }
    });
    return User;
  };