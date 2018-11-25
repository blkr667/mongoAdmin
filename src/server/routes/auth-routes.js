var passport = require('passport'),
    LocalStrategy = require('passport-local'),
    User = require('../../db/schema/user');

const LOGIN_ROUTE = "/login";
const LOGOUT_ROUTE = "/logout";
const AUTH_CHECK_ROUTE = "/authcheck";
const REGISTER_ROUTE = "/register";

function addAuthRoutes(app) {

    let isAuthenticated = false;

    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


    app.get(LOGIN_ROUTE, function(req, res){
        isAuthenticated = true;
        res.send({status: 200});
    });

    app.post(LOGIN_ROUTE,  passport.authenticate('local'),
        function(req, res){
            res.send({status: 200});
    });

    app.get(LOGOUT_ROUTE, function(req, res){
        req.logout();
        res.send({status: isAuthenticated});
    });

    app.get(AUTH_CHECK_ROUTE, function(req, res){
        res.send({status: isAuthenticated});
    });

    app.post(REGISTER_ROUTE, function(req, res){
        User.register(new User({username: req.body.username, displayName: req.body.displayName}),
            req.body.password, function(err, user){
            if(err){
                console.log(err);
            }else{
                passport.authenticate("local")(req, res, function(){
                });
            }
        })
    });



}

export default addAuthRoutes;