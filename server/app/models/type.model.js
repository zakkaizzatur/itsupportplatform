module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define("type", {
      type_name: {
        type: Sequelize.STRING
      },
    });
    return Type;
  };