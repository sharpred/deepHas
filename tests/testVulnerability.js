var dh = require("../deepHas"),
    should = require("should"),
    obj;

obj = {};

dh.set(obj,'__proto__.isAdmin',true);

should.not.exist(obj.isAdmin);
obj.hasOwnProperty('isAdmin').should.equal(false);