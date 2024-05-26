module.exports.profile = function(req,res){
    return res.render('profile');
}

module.exports.signOut = function(req,res){
    console.log('Sign out Successfully');
    res.cookie('user_id','');
    return res.redirect('/login');
}