const mongoose = require('mongoose');
const schema = mongoose.Schema;

// const MoviesSchema = new Schema({
// //     movieID: { type: String, required: true },
// //     title: { type: [String], required: true },
// //     studio: { type: Number, required: true },
// //     genre: { type: String, required: true },
// //     directors: [
// //         {type:string}
// //     ],
// //     writers: { type: String, required: true },
// //     actors: { type: String, required: true },
// //     year: { type: Number, required: true },
// //     shortDescription: { type: Number, required: true }

// // })

const MoviesSchema = new Schema({
    movieID: { type: String },
    title: { type: String },
    studio: { type: String },
    genres: { type: String },
    directors: [
        { type: string }
    ],
    writers: [
        { type: string }
    ],
    actors: [
        { type: string }
    ],
    year: { type: Number },
    length: { type: Number },
    shortDescription: { type: String },
    mpaRating: { type: String },
    criticsRating: { type: Number },
})

const Movies = mongoose.model(Movies, MoviesSchema);
module.exports = Movies;