var passport = require('passport'),
    User = require('../../db/schema/user');

const USER_ROUTE = "/users";
const USER_ID_ROUTE = "/users/:id";


function addUsersRoutes(app) {

    addDefaultUser();

    app.get(USER_ROUTE, function(req, res){
        User.find({}, function(err, userList) {
            res.send(userList);
        });
    });

    app.get(USER_ID_ROUTE, function(req, res){
        User.findOne({_id: req.params.id}, function(err, user) {
            res.send(user);
        });
    });

    app.post(USER_ID_ROUTE, function(req, res){
        const userModel = {
            username: req.body.username,
            displayName: req.body.displayName
        };

        User.register(new User(userModel),
            req.body.password, function(err, user){
                if(err){
                    console.log(err);
                }else{
                    passport.authenticate("local")(req, res, function(){
                        res.send(user);
                    });
                }
            })
    });

    app.delete(USER_ID_ROUTE, function(req, res){
        User.findOne({_id: req.params.id}, function(err, foundUser) {
            if(foundUser) {
                foundUser.remove();
                res.send(foundUser);
            }
        });
    });

    app.put(USER_ID_ROUTE, function(req, res){
        const userModel = {
            username: req.body.username,
            displayName: req.body.displayName
        };
        User.findOne({_id: req.params.id}, function(err, foundUser) {
            if(foundUser) {
                foundUser.username = userModel.username;
                foundUser.displayName = userModel.displayName;
                foundUser.save();
                res.send(foundUser);
            }
        });
    });
}

const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_DISPLAY_NAME = "default admin";
const DEFAULT_ADMIN_PASSWORD = "admin";

function addDefaultUser() {
    User.find({}, function(err, userList) {
        if(!userList.length) {
            User.register(new User({
                    username: DEFAULT_ADMIN_USERNAME,
                    displayName: DEFAULT_ADMIN_DISPLAY_NAME
                }),
                DEFAULT_ADMIN_PASSWORD, function(err, user){
                    if(err){
                        console.log(err);
                    }
                })
        }
    });
}

export default addUsersRoutes;