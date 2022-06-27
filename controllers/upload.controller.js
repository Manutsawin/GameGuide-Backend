const db = require("../models");
const Upload = db.upload;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.uploadPic = async (req, res) => {
    
    try {
        console.log("Access")
        console.log(req.files)
        const project = await Upload.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId,
            //add the lines below            
            imageType: req.files[0].mimetype,
            imageName: req.files[0].originalname,
            imageData: req.files[0].buffer,
            //add the lines above
        });
        return res.status(201).json({ project });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

};

exports.getAllPic = async (req,res)=>{

    try {
        const projects = await Upload.findAll()
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
    } catch (error) {
        return res.status(500).send(error.mesage);
    }
}