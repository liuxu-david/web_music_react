const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
console.log(resolve("/user"));
