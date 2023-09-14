const { v4: uuidv4 } = require('uuid');
const { hashSync } = require('bcryptjs');

const User = function ({ firstName, lastName, email, password, mainImage, rol ,phone, shipping}) {
  this.id = uuidv4();
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = hashSync(password, 10);
  this.mainImage = mainImage;
  this.rol = rol ? rol : "usuario"; 
  this.phone = phone?phone: null;
  this.shipping =shipping?shipping: null
};

module.exports = User;