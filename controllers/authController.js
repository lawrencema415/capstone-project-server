// packages
const bcrypt = require('bcryptjs');

const validate = require('../validation/register');
const db = require('../models');

// Register route
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

// Login route
const login = (req,res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ status: 400, message:"Please enter email and password."});
  }

  db.User.findOne({email: req.body.email}, (err, foundUser) => {
    if (err) return res.status(500).json({ status: 500, message:"Something went wrong, please try again."});

    if(!foundUser) {
      return res.status(400).json({ status: 400, message: "Email or password is incorrect."});
    }

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err) return res.status(500).json({ status: 500, message: "Something went wrong, please try again."});

      if (isMatch) {
        req.session.loggedIn = true;
        req.session.currentUser = { id: foundUser._id };
        return res.status(200).json({ status: 200, message :"Success", id: foundUser._id});
      } else {
        return res.status(400).json({ status: 400, message: "Email or password is incorrect"});
      };
    });
  });
};

// Logout route
const logout = (req,res) => {
  req.session.destroy(err => {
    if (err) return res.json({status:400, message: "Something went wrong, please try again."});
    res.sendStatus(200);
  });
};

// Verify route
const verify = (req,res) => {
  if (!req.session.currentUser) return res.status(401).json({ status: 401, message: "unauthorized"});
  res.status(200).json({status: 200, message: `Current user verified. User ID is ${req.session.currentUser.id}`})
};



module.exports = {
  register,
  login,
  logout,
  verify
};
