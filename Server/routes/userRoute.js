const router = require('express').Router();
let User = require('../models/userModel');


router.route('/').get((request,response) => {
    User.find()
        .then(user => response.json(users))
        .catch(err => response.status(400).json('Error: ' + err));
});


module.exports = router;