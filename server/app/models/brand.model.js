module.exports = (sequelize, Sequelize) => {
    const Brand = sequelize.define("brand", {
      brand_name: {
        type: Sequelize.STRING,
        unique: true
      },
    });
    return Brand;
  };