module.exports = (sequelize, Sequelize) => {
    const Char = sequelize.define("character", {
      name: {
        type: Sequelize.STRING
      },
      pic: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      item:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      enchantment:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      tear:{
        type: Sequelize.STRING
      },
      position:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      }
    });
  
    return Char;
  };