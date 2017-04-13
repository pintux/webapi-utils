var express = require('express');
var router = express.Router();


/* GET books listing. */
router.get('/', (req, res, next) => {
  console.log("URL:", req.originalUrl);
  res.format({
      text: function(){
        res.send('books:1,2,3');
      },

      html: function(){
        res.send('<p>books</p>');
      },

      json: function(){
        res.send({ books: [] });
      },

      'application/ld+json': function(){
        res.send({
                  "@context": "http://json-ld.org/contexts/person.jsonld",
                  "name": "BOOK Author...",
                  "homepage": "http://manu.sporny.org/",
                  "image": "http://manu.sporny.org/images/manu.png"
                }
        );
      }
  });
});

router.get('/:id', (req, res, next) => {
  console.log("URL:", req.originalUrl);
  res.format({
      text: function(){
        res.send('books: '+ req.params.id);
      },

      html: function(){
        res.send('<p>books</p>' + + req.params.id);
      },

      json: function(){
        res.send({ users: [{user: + req.params.id}] });
      },

      'application/ld+json': function(){
        res.send({
                  "@context": "http://json-ld.org/contexts/person.jsonld",
                  "name": "Book Author Manu Sporny" + + req.params.id,
                  "homepage": "http://manu.sporny.org/",
                  "image": "http://manu.sporny.org/images/manu.png"
                }
        );
      }
  });
});


module.exports = router;
