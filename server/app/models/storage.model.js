module.exports = (sequelize, Sequelize) => {
    const Storage = sequelize.define("storage", {
      type: {
        type: Sequelize.STRING
      },
    });
    return Storage;
  };