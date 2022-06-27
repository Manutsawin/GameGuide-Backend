module.exports = (sequelize, Sequelize) => {
    const Upload = sequelize.define("upload", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      userId:{
        type: Sequelize.INTEGER
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
    return Upload;
  };