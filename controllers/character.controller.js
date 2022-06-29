const db = require("../models");
const Character = db.character;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    // if (!req.body.name||!req.body.role||!req.body.item||!req.body.enchantment||!req.body.tear||!req.body.position) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }
    const character = {
      name:req.body.name,
      role:req.body.role,
      range:req.body.range,
      imageType: req.files[0].mimetype,
      imageName: req.files[0].originalname,
      imageData: req.files[0].buffer,
    };

    Character.create(character)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.getAll = (req, res) => {
    Character.findAll()
      .then(projects => {
        projects.map(project => {
          const projectImage = project.imageData.toString('base64')
          project['imageData'] = projectImage
        });
        return projects;
      })
      .then(projects => {
        return res.status(200).json({ projects: projects })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.getOne = (req, res) => {
    const id = req.params.id;
    Character.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
