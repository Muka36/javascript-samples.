const User = require("./class")

const hitehs = new User('karhi', 'tmakrthickk.com')

console.log(hitehs.getinfo());

hitehs.enrollcourse('java');

console.log(hitehs.getcourselist());

let courses = hitehs.getcourselist();

courses.forEach((e) => console.log(e))