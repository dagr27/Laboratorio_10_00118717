const mongoose = require;
const User
const bcrypt = require('bcrypt');
const AuthMiddleware = {};

AuthMiddleware.isAuthentication = function (req, res, next) {
        if(!req.session.user) {
         return res.redirect('/'); 
    } else {
        if(User){
                return res.redirect('/');
        }
        else{
                bcrypt.compare(DataCue.userId, user.id_id.toString(), function(err, result){
                        if(result = true){
                                return next();
                        }
                        else{
                                return next(err);
                        }
                }
        
        }
    }
}
