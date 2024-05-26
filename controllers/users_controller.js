const Property = require('../models/property');

module.exports.profile = function (req, res) {
    return res.render('profile');
}

module.exports.signOut = function (req, res) {
    console.log('Sign out Successfully');
    res.cookie('user_id', '');
    return res.redirect('/login');
}

module.exports.createProperty = async function (req, res) {

    console.log(req.body);
    const { city, address, bathrooms, bedrooms, nearby } = req.body;

    try {
        let property = await Property.create({
            city,
            address,
            bathrooms,
            bedrooms,
            nearby,
            user: req.user._id
        });

        console.log('property created successfully');

    } catch (err) {
        console.log('Error creating property for user', err);
    }

    return res.redirect('back');

}

module.exports.deleteProperty = async function (req, res) {
    console.log(req.params);

    try {
        let property = await Property.findOne({ _id: req.params.id });

        if (!property) {
            console.log('no property exist');
            return res.redirect('back');
        }

        if (property.user != req.user.id) {
            console.log('cannot delete other property, Access Denied!!!');
            return res.redirect('back');
        }

        await Property.deleteOne({ _id: req.params.id });

        console.log('Property deleted successfully');
    } catch (err) {
        console.log('Error deleting property', err);
    }

    return res.redirect('back');
}