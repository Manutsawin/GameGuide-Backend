const  express = require("express");
const  router = express.Router();
const tutorials = require("./controllers/tutorial.controller.js");
const { verifySignUp } = require("./middleware");
const { authJwt } = require("./middleware");
const controller = require("./controllers/auth.controller");
const controllerChar = require("./controllers/character.controller");
const controllerUpload = require("./controllers/upload.controller");
const controllerTier = require("./controllers/tier.controller");
const upload = require('multer')();




//Authen------->

router.post(
  "/auth/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
  ],
  controller.signup
);

router.post(
  "/addHero",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
  ],
  upload.any(),
  controllerChar.create
);

router.get(
  "/getAllHero",
  controllerChar.getAll
);




router.post("/auth/signin", controller.signin);

//------->

router.post("/upload", upload.any(),controllerUpload.uploadPic);
router.get("/allPic", controllerUpload.getAllPic);


router.post("/tier", );

router.post(
  "/tier",
  [
    authJwt.verifyTokenUser,
  ],
  controllerTier.create
);

//Tutorial------->

// // Create a new Tutorial
// router.post("/tutorials", tutorials.create);

// // Retrieve all Tutorials
// router.get("/tutorials", tutorials.findAll);

// // Retrieve all published Tutorials
// router.get("/published", tutorials.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", tutorials.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorials.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorials.delete);

// // Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

//------->


module.exports = router;