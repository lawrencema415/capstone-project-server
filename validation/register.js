module.exports = ({email, name, password, password2}) => {
  let errors = [];
  if (!email) {
    errors.push({message:'Please enter your email'})
  }
  if (!name) {
    errors.push({message:'Please enter your name'})
  }
  if (!password) {
    errors.push({message:'Please enter your password'})
  }
  if (password !== password2) {
    errors.push({message: 'Passwords do not match, please try again.'})
  }

  return {
    errors,
    invalid: Boolean(errors.length)
  }
}
