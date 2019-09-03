// packages
const bcrypt = require('bcryptjs');

const validate = require('../validation/register');
const db = require('../models');

const register = (req,res) => {
  const {errors, invalid} = validate(req.body);

  if (invalid) {
    return res.status(400).json({status:400, errors});
  }

  db.User.findOne({email: req.body.email}, (err,foundUser) => {
    if(err) return res.status(500).json({ status:500, message:"Something went wrong, please try again."});

    if(foundUser) return res.status(400).json({ status:400, message:"Email has already been registered, please use another email."});

    bcrypt.genSalt(10, (err, salt) => {
      if (err) return res.status(500).json({status: 500, message: "Something went wrong, please try again."});

      bcrypt.hash(req.body.password, salt, (err,hash) => {
        if (err) return res.status(500).json({ status:500, message: "Something went wrong, please try again."});

        const newUser = {
          email: req.body.email,
          name: req.body.name,
          password: hash
        }

        db.User.create(newUser, (err,savedUser) => {
          if (err) return res.status(500).json({status: 500, message: err});
          res.status(201).json({ status: 201, message: "Success!"});
        });
      });
    });

  });
};



module.exports = {
  register
}
