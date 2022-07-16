module.exports = (sequelize, Sequelize) => {
    const Laptop = sequelize.define("laptop", {
      brand: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      processor_type: {
        type: Sequelize.STRING
      },
      processor_generation: {
        type: Sequelize.STRING
      },
      ram_type: {
        type: Sequelize.STRING
      },
      ram_size: {
        type: Sequelize.SMALLINT
      },
      storage_type: {
        type: Sequelize.STRING
      },
      storage_size: {
        type: Sequelize.SMALLINT
      },
      graphics_type: {
        type: Sequelize.STRING
      },
    });
    return Laptop;
  };