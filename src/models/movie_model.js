const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        release_date: { type: String, required: true },
        genre: { type: Array, required: true },
        director: { type: Array, required: true },
        cast: { type: Array, require: true },
        duration: { type: Number, requiere: true },
        rating: { type: String, requiere: true },
        language: { type: String, requiere: true },
        poster: { type: Array, requiere: true },
        trailer: { type: String, requiere: true },
        production_company: { type: String, requiere: true },
        country: {type: String, requiere: true}
    }
)

module.exports = mongoose.model("Movie", movieSchema);
