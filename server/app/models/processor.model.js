module.exports = (sequelize, Sequelize) => {
    const Processor = sequelize.define("processor", {
      brand: {
        type: Sequelize.STRING
      },
      series: {
        type: Sequelize.STRING
      },
      clock_speed: {
        type: Sequelize.SMALLINT
      },
      generation: {
        type: Sequelize.SMALLINT
      }
    });
    return Processor;
  };