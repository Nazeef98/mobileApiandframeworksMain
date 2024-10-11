const express = require('express');
const router = express.Router();
const movieController = require('../controllers/controller');
const {validateMovie}=require('../middleware/middleware');

//Route to get movies
router.post('/import',movieController.importMovies);

//Route to get all movies
router.get('/',movieController.getMovies);

//Route to fecth a single movie by id
router.get('/:id',movieController.getMovieById);

//Route to update a movie by id

router.put('/update/:id', validateMovie,movieController.updateMovie);

//Route top delete a movie by id

router.delete('/delete/:id',movieController.deleteMovie);


//Route to create a new movie
//Validate movie before creating
router.post('/create',validateMovie,movieController.createMovie);


module.exports = router;