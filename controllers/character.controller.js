const db = require("../models");
const Character = db.character;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    
    if (!req.body.name||!req.body.role||!req.body.item||!req.body.enchantment||!req.body.tear||!req.body.position) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const character = {

        name:req.body.name,
        role:req.body.role,
        item:req.body.item,
        enchantment:req.body.enchantment,
        tear:req.body.tear,
        position:req.body.position

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