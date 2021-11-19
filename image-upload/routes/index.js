const { uploader, cloudinary } = require('../config/cloudinary');

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
  // todo
});

router.get('/movie/delete/:id', (req, res, next) => {
  // todo
});


module.exports = router;
