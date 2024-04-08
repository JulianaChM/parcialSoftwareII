const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        release_date: { type: String, required: true },
        genre: { type: Array, required: true },
        director: { type: String, required: true },
        cast: { type: Array, require: true },
        duration: { type: Number, required: true },
        rating: { type: String, required: true },
        language: { type: String, required: true },
        poster: { type: Array, required: true },
        trailer: { type: String, required: true },
        production_company: { type: String, required: true },
        country: { type: String, required: true },
        avatar: { type: String, required: true }
    }
)

module.exports = mongoose.model("Movie", movieSchema);
