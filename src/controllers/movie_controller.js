const movieModel = require("../models/movie_model");

const createMovie = async (req, res) => {
  try {
    const {
      title,
      description,
      release_date,
      genre,
      director,
      cast,
      duration,
      rating,
      language,
      trailer,
      production_company,
      country
    } = req.body;

    const posters = req.files.map(file => file.filename);   

    const newMovie = await movieModel.create({
      title,
      description,
      release_date,
      genre,
      director,
      cast,
      duration,
      rating,
      language,
      poster:posters,
      trailer,
      production_company,
      country
    });
    console.log(newMovie);

    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const listMovies = async (req, res) => {
  try {
    const movies = await movieModel.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const movie = await movieModel.findById(id);

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      realease_date,
      genre,
      director,
      cast,
      duration,
      rating,
      language,
      poster,
      trailer,
      production,
      country
    } = req.body;

    const movieEdit = {};

    movieEdit.poster = req.file ? req.file.filename : null;

    movieEdit.title = title;
    movieEdit.description = description;
    movieEdit.realease_date = realease_date;
    movieEdit.genre = genre;
    movieEdit.director = director;
    movieEdit.cast = cast;
    movieEdit.duration = duration;
    movieEdit.rating = rating;
    movieEdit.language = language;
    movieEdit.trailer = trailer;
    movieEdit.production = production;
    movieEdit.country = country;

    const movie = await movieModel.findByIdAndUpdate(id, movieEdit);

    console.log(movie);

    res.status(200).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await movieModel.findByIdAndDelete(id);
    res.status(200).json()

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createMovie,
  listMovies,
  getMovie,
  editMovie,
  deleteMovie
};
