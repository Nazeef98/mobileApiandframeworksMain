const Movie = require('../models/movies-model');
const fs = require('fs');



// Controller to get all movies (with optional search and filter functionality)
exports.getMovies = async (req, res) => {
    try {
        // Extract query parameters from the request
        const { title, genre, year } = req.query;

        // Initialize a filter object for MongoDB query
        let filter = {};

        // for filtering with the title
        if (title) {
            filter.title = { $regex: title, $options: 'i' }; // 'i' makes it case-insensitive
        }
        // Add genre to filter if query parameter is provided
        if (genre) {
            filter.genres = genre;
        }

        // year filter if year paramitre is given
        if (year) {
            filter.year = Number(year); // Convert year to number
        }
        // get movies from the database based on the filter
        const movies = await Movie.find(filter);

        // to send filter movie as response
        res.status(200).json(movies);
    } catch (e) {
        console.error(e);
        res.status(500).send('Error retrieving Movies');
    }
}
//Function to create a new movie
exports.createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json(newMovie);
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error creating Movies');
    }
};


//Get a single movie by Id
exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).send('Movie is not found');
        }
        res.status(201).json(movie);

    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error retrieving the Movies');
    }
};


//update Movie

//Get a single movie by Id
exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMovie) {
            return res.status(404).send('Movie is not updated');
        }
        res.status(201).json(updatedMovie);

    }
    catch (e) {
        console.error(e);
        res.status(500).send('Error uodating the Movies');
    }
};


//Delete a single movie by Id
exports.deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).send('Movie not found');
        }
        res.status(201).json(deletedMovie);

    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error deleting the Movies');
    }
};

// Function to import movies (moved from index.js)
exports.importMovies = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync('./movies.json', 'utf-8')); // Read data from movies.json
        const count = await Movie.countDocuments();
        if (count === 0) {
            await Movie.create(data); // Create movies in the database
            console.log('Data successfully imported to MongoDb');
            res.status(200).send('Data successfully imported');
        } else {
            res.status(200).send('Data already exists, skipping import');
        }
    } catch (e) {
        console.error('Error importing data', e);
        res.status(500).send('Error importing data');
    }
};
