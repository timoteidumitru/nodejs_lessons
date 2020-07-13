const validator = require("validator");

//check for the given argument if is and email
console.log(validator.isEmail("tim@gmail.com"));

//check for the string if is an valid URL
console.log(validator.isURL("https://isitvalid.co.uk"));
