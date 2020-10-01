const express = require('express');
const router = express.Router();
const Movies =require('../models/Movies.model')

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


module.exports = router;
