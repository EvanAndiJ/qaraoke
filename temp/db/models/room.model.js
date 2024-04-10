module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("rooms", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
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