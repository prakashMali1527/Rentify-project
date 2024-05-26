const User = require('../models/user');

// check if the user is authenticated
module.exports.checkAuthentication = async function (req, res, next) {

    const { user_id } = req.cookies;
    if (!user_id) {
        // if the user is not signed in 
        return res.redirect('/login');
    }

    try {
        let user = await User.findOne({ _id: user_id });

        if (!user) {
            // if the user is not signed in 
            return res.redirect('/login');
        }

        // if the user is signed in, then pass on the request to the next function(controller's action)
        next();

    } catch (err) {
        console.log(`Error finding user_id in database`, err);
        return res.redirect('/login');
    }
}

module.exports.setAuthenticatedUser = async function (req, res, next) {
   
    const { user_id } = req.cookies;

    if(user_id){
        try {
            let user = await User.findOne({ _id: user_id });
    
            if (user) {
                // sending usr to the locals for the views and setting to req
                
                req.user = user;
                res.locals.user = user;
        
                // if the user is signed in, then pass on the request to the next function(controller's action)
            }
        }catch(err){
            console.log('error finding user in middleware');
        } 
    }
    next();
}

// check if the user is authenticated
module.exports.checkUnAuthentication = async function (req, res, next) {

    const { user_id } = req.cookies;
    
    if(user_id){
        try {
            let user = await User.findOne({ _id: user_id });
    
            // if the user is not signed in, then take back user to profile
            if(user){
                return res.redirect('users/profile');
            }
    
        } catch (err) {
            console.log(`Error finding user_id in database`, err);
        }
    }
    next();
}