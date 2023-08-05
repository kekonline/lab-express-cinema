const express = require('express');
const router = express.Router();

const Movies = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
        .then((allMoviesResponse) => {
            res.render("movies.hbs", { allMovies: allMoviesResponse })
        })
        .catch((error) => console.log(error))
})

router.get("/movies/:id", (req, res, next) => {
    Movies.findById(req.params.id)
        .then((oneMovieResponse) => {
            res.render("movie.hbs", { oneMovie: oneMovieResponse })
        })
        .catch((error) => console.log(error))
})





module.exports = router;
