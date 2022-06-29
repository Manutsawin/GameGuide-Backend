module.exports = (sequelize, Sequelize) => {
    const Char = sequelize.define("character", {
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      range:{
        type: Sequelize.STRING
      },
      imageType: {
        type: Sequelize.STRING
      },
      imageName:{
        type: Sequelize.STRING
      },
      imageData:{
        type: Sequelize.BLOB
      }
    });
  
    return Char;
  };