module.exports = (sequelize, Sequelize) => {
    const Tier = sequelize.define("tier", {
      owner: {
        type: Sequelize.STRING
      },
      nameTier: {
        type: Sequelize.STRING
      },
      idUser:{
        type: Sequelize.STRING
      },
      dark: {
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      abyssal:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      mid:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      jungle:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      },
      roam:{
        type: Sequelize.ARRAY(Sequelize.JSON)
      }
      
    });
    return Tier;
  };