const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  let token = bearerHeader.split(' ')[1]
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  let token = bearerHeader.split(' ')[1]
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    else if(decoded.role=="Admin")
    {
      next();
      return;
    }
  });
};


verifyTokenUser =  (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  let token = bearerHeader.split(' ')[1]
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
    jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    User.findByPk(decoded.id).then(data=>{
      req.userId = data.id
      req.username = data.username
      next();
    })
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  verifyTokenUser : verifyTokenUser
};
module.exports = authJwt;