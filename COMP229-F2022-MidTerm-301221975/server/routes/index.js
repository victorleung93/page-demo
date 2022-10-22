// modules required for routing
const { Router } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});
router.get('/details', (req, res, next) => {
  res.render('books/details', {
    title: 'Add Book',
    books: ''
   });
});
/* Add Book */
//  GET the Book Details page in order to add a new Book
router.post('/add', (req, res, next) => {
  console.log("testing");
      /*****************
       * ADD CODE HERE *
       ***************
  */
/*
  var title = res.body.title;
  var description = res.body.Description;
  var price = res.body.Price;
  var author = res.body.Author;
  var genre = res.body.Genre;
  
  */
    try{
      var record = book.create({title, 
        description,
        price,
        author,
        genre})
        ;console.log("book created");
    }catch(err){
      console.log(err);
    }
  });

  router.get('/delete', (req, res, next)=>{
    var deletion = books.deleteOne({id: id })
  })
module.exports = router;
