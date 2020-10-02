const express = require('express');
const router = express.Router();
const Movies =require('../models/Movies.model');
const bodyParser = require('body-parser');
const cors = require('cors')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors())

/* GET home page */
router.get('/', (req, res) => {
  console.log('called');
  res.json({ message: 'index' });
});

//Get movies page
router.get('/movies', (req, res) => {
  Movies.find().then((movies) => {
    console.log(movies)
    res.json({movies})
  })
})

router.get('/movies/:id', (req, res) => {
  Movies.findById(req.params.id).then((eachMovie) => {
    console.log(eachMovie)
    res.json({eachMovie})
  })
})

router.post('/addMovie', (req, res) => {
  Movies.create(req.body).then((addMovie) => {
    res.json({addMovie})
  })
})


module.exports = router;
