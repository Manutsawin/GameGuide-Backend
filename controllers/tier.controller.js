const db = require("../models");
const Tier = db.tier;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   
    const tier= {
        owner:req.username,
        nameTier:req.body.nameTier,
        idUser:req.userId,
        dark:req.body.dark,
        abyssal: req.body.abyssal,
        mid: req.body.mid ,
        jungle:req.body.jungle,
        roam : req.body.roam
    };

    Tier.create(tier)
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