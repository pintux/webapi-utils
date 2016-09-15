webapi-utils
============

[![NPM](https://nodei.co/npm/webapi-utils.png)](https://nodei.co/npm/webapi-utils/)


Node.js / Express utilities and middlewares for Web APIs 


Requirements
------------
Node.js  **> v6.3.x**

Tested with Express.js **v.4.14.0**

Installation
------------

`npm install webapi-utils`


Available Middlewares
---------------------

**jsonExtension()**

This middleware allows to use the dot-notation `.json` in API endpoints URL (Express route paths).
This feature can be used as a shortcut to require JSON representations of resources, instead of using `Accept: application/json` HTTP header only for content-negotiation in an API.

OK, wait a moment... why using dot-notation when we have HTTP headers?

Be pragmatic! And make your API users happy, as explained in [this guide](https://leanpub.com/thewebapinntux).



**jsonLDExtension()**

This middleware allows to use the dot-notation `.jsonld` in API endpoints URL (Express route paths). 
This feature can be used as a shortcut to require JSON-LD representations of resources, instead of using `Accept: application/ld+json` HTTP header only for content-negotiation in an API.

Examples
-------------

**1) Enabling .json requests**

In your Express `app.js` file, set the path:

```js

app.use('/books(.json)?', books);
```

In your `routes/books.js` Route file:


```js

const middl = require('webapi-utils').middleware;
...

router.use(middl.jsonExtension());
...


/* GET books listing. */
router.get('/', (req, res, next) => {
  res.format({
      text: function(){
        res.send(...); //send books as text
      },

      html: function(){
        res.send(...); //send books as html
      },

      json: function(){
        res.send({ books: [...] }); //send books as json
      }
  });
});

```
Through this middleware it will be possible to call your endpoint with a request like:

`GET /books.json`

or like:

`GET /books`, using the `Accept: application/json` HTTP header.

---


**2) Enabling .json AND .jsonld requests**

In your Express `app.js` file, set the path:

```js

app.use('/books(.json)?(.jsonld)?', books);
```

In your `routes/books.js` Route file:


```js

const middl = require('webapi-utils').middleware;
...

router.use(middl.jsonExtension());
router.use(middl.jsonLDExtension());
...


/* GET books listing. */
router.get('/', (req, res, next) => {
  res.format({
      text: function(){
        res.send(...); //send books as text
      },

      html: function(){
        res.send(...); //send books as html
      },

      json: function(){
        res.send({ books: [...] }); //send books as json
      },
      
      'application/ld+json': function(){
              res.send({
                        "@context": "...",
                        "title": "Web API",
                        ...
                      });
      }
  });
});

```
Through this middleware it will be possible to call your endpoint with a request like:

`GET /books.json`
`GET /books.jsonld`

or like:

`GET /books`, using the `Accept: application/ld+json` HTTP header or `Accept: application/json`.


Contributors
------------

<table><tbody>
<tr><th align="left">Antonio Pintus</th><td><a href="https://github.com/pintux">GitHub/pintux</a></td><td><a href="https://www.pintux.it">Web</a></td></tr>
</tbody></table>


License - "MIT License"
-----------------------
Copyright (c) 2016 Antonio Pintus (http://www.pintux.it)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
