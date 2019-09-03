module.exports = (req,res,next) => {
  if (!req.session.currentUser) {
    return res.status(401).json({status: 401, message: "Unauthorized, please log in."});
  }
  next();
}
