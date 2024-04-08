const movieController = require("../controllers/movie_controller")
const express = require("express")
const router = express.Router();

// http://localhost:3000/api/v1/movies/new-movie
router.post("/new-movie", movieController.createMovie);
// http://localhost:3000/api/v1/movies/
router.get("/", movieController.listMovie);
// http://localhost:3000/api/v1/movies/:id
router.get("/:id", movieController.getMovie);
// http://localhost:3000/api/v1/movies/edit/:id
router.patch("/edit/:id", movieController.editMovie);
// http://localhost:3000/api/v1/movies/delete/:id
router.delete("/delete/:id", movieController.deleteMovie);


module.exports = router 