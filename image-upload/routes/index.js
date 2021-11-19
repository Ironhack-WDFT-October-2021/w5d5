const router = require("express").Router();
const Movie = require('../models/Movie');
const { uploader, cloudinary } = require('../config/cloudinary')

router.get("/", (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render("index", { movies });
    })
    .catch(err => next(err))
});

router.get('/movie/add', (req, res, next) => {
  res.render('movie-add');
});

router.post('/movie/add', uploader.single('poster'), (req, res, next) => {
  const { title, description } = req.body
  console.log(req.file)
  // get the data from cloudinary
  const imgPath = req.file.path
  const imgName = req.file.originalname
  const publicId = req.file.filename
  // create the movie document
  Movie.create({ title, description, imgPath, imgName, publicId })
    .then(movie => {
      console.log(movie)
      res.redirect('/')
    })
    .catch(err => next(err))
});

router.get('/movie/delete/:id', (req, res, next) => {
  // todo
  // cloudinary.uploader.destroy(publicId)
  Movie.findByIdAndDelete(req.params.id)
    .then(deletedMovie => {
      if (deletedMovie.imgPath) {
        // we also delete that image on cloudinary
        cloudinary.uploader.destroy(deletedMovie.publicId)
      }
      res.redirect('/')
    })
    .catch(err => next(err))
});

module.exports = router;