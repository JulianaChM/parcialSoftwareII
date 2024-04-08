const movieController = require("../controllers/movie_controller");
const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/avatars');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// http://localhost:3000/api/v1/movies/new-movie
router.post("/new-movie", upload.array('avatar'), movieController.createMovie);
// http://localhost:3000/api/v1/movies/
router.get("/", movieController.listMovies);
// http://localhost:3000/api/v1/movies/:id
router.get("/:id", movieController.getMovie);
// http://localhost:3000/api/v1/movies/edit/:id
router.patch("/edit/:id", upload.single('avatar'), movieController.editMovie);
// http://localhost:3000/api/v1/movies/delete/:id
router.delete("/delete/:id", movieController.deleteMovie);


module.exports = router 