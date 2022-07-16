module.exports = (sequelize, Sequelize) => {
    const Ram = sequelize.define("ram", {
      type: {
        type: Sequelize.STRING
      },
      clock_speed: {
        type: Sequelize.SMALLINT
      },
    });
    return Ram;
  };