var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {

    if(req.method === "GET"){
        // continue to the next middleware or request handler
        return next();
    }

    if(!req.isAuthenticated()){
        // user not authenticated, redirect to login page
        return res.redirect('/#login');
    }
    // user authenticated continue to next middleware or handler
    return next();
});
//api for all posts
router.route('/posts')

    //create a new post
    .post(function(req, res){

        //TODO create a new post in the database
        res.send({message:"TODO create a new post in the database"});
    })
    // get all posts
    .get(function(req, res){

        //TODO get all the posts in the database
        res.send({message:"TODO get all the posts in the database"});
    })

//api for a specfic post
router.route('/posts/:id')

    // modify a specific post
    .put(function(req,res){
        return res.send({message:'TODO modify an existing post by using param ' + req.param.id});
    })
    // get a specific post
    .get(function(req,res){
        return res.send({message:'TODO get an existing post by using param ' + req.param.id});
    })
    // delete specific post
    .delete(function(req,res){
        return res.send({message:'TODO delete an existing post by using param ' + req.param.id})
    });

module.exports = router;