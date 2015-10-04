var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');
//temporary data store
var users = {};
module.exports = function(passport){

    // Passport needs to be able to serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        console.log('serializing user:',user.username);
        return done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {

        return done('we have not implemented this', false);

    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            // check if user exists
            if(!user[username]){
                return done('user not found', false);
            }
            // check if password is correct
            if(isValidPassword(users[username], password)){
                return done('invalid password', false);
            }
            // sucessfully signed in
            console.log('sucessfully signed in');
            return done(null, user[username]);
        }
    ));

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            // check if user name already exists
            if (user[username]) {
                return done('username already exists', false)
            }
            // add user to db
            users[username] = {
                username: username,
                password: createHash(password)
            };

            return done(null, users[username]);

        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };
    // Generates hash using bCrypt
    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

};
