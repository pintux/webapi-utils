const test = require('unit.js');
const should = test.should;
const request = require('supertest')
const app = require('./app');
const debug = require('debug')('TESTS');

describe('Web API Utils middlewares tests', function () {

    describe('GET /books', function () {
        it('should be OK and respond with JSON', function (done) {
            request(app)
                .get('/books')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });


    describe('GET /books.json', function () {
        it('should be OK and respond with JSON', function (done) {
            request(app)
                .get('/books.json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    
    describe('GET /books', function () {
        it('should be OK and respond with TEXT', function (done) {
            request(app)
                .get('/books')
                .expect(200)
                .expect('Content-Type', /text/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books/:id', function () {
        it('should be OK and respond with text', function (done) {
            request(app)
                .get('/books/1')
                .expect(200)
                .expect('Content-Type', /text/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books', function () {
        it('should be OK and respond with LD+JSON', function (done) {
            request(app)
                .get('/books')
                .set('Accept', 'application/ld+json')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books.jsonld', function () {
        it('should be OK and respond with LD+JSON', function (done) {
            request(app)
                .get('/books.jsonld')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    //by ID

    describe('GET /books/:id', function () {
        it('should be OK and respond with json', function (done) {
            request(app)
                .get('/books/1.json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id', function () {
        it('should be OK and respond with JSON', function (done) {
            request(app)
                .get('/books/1')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books/:id', function () {
        it('should be OK and respond with ld+json', function (done) {
            request(app)
                .get('/books/1.jsonld')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id', function () {
        it('should be OK and respond with ld+JSON', function (done) {
            request(app)
                .get('/books/1')
                .set('Accept', 'application/ld+json')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    //by ID with params
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with json', function (done) {
            request(app)
                .get('/books/1.json?start=2016-09-28T08:04:29.382Z')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with JSON', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with ld+json', function (done) {
            request(app)
                .get('/books/1.jsonld?start=2016-09-28T08:04:29.382Z')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id', function () {
        it('should be OK and respond with LD+JSON', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z')
                .set('Accept', 'application/ld+json')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    //by ID with several params
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with json', function (done) {
            request(app)
                .get('/books/1.json?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with JSON', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with ld+json', function (done) {
            request(app)
                .get('/books/1.jsonld?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with LD+JSON', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .set('Accept', 'application/ld+json')
                .expect(200)
                .expect('Content-Type', /ld\+json/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with text', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .expect(200)
                .expect('Content-Type', /text/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });
    describe('GET /books/:id?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z', function () {
        it('should be OK and respond with text', function (done) {
            request(app)
                .get('/books/1?start=2016-09-28T08:04:29.382Z&end=2016-09-28T08:04:29.382Z')
                .set('Accept', 'text/plain')
                .expect(200)
                .expect('Content-Type', /text/)
                .end(function (err, res) {
                    if (err) return done(err);
                    debug(res.body);
                    done();
                });
        });
    });

});
