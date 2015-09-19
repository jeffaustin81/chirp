var express = require('express');
var router = express.Router();

router.route('/posts')

// returns all posts
.get(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO return all posts'
    });
})

.post(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO Create a new post'
    });
});

router.route('/posts/:id')

// returns a particular
.get(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO return post with ID' + req.params.id
    });
})
// update particular post
.post(function(req, res) {
    // temporary solution
    res.send({
        message: 'TODO modify post with ID' + req.params.id
    });
});

module.exports = router;
