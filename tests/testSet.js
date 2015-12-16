var dh = require("../deepHas"),
    should = require("should"),
    obj;

obj = {
    "top" : {
        "middle" : {
            "bottom" : {
                "val" : "wobble"
            }
        }
    },
    "truthy" : true,
    "falsey" : false
};

dh.set(obj, "top.middle.bottom", {
    "val" : "wibble"
});
//assertions
JSON.stringify(obj["top"]["middle"]["bottom"]).should.equal(JSON.stringify({
    "val" : "wibble"
}));
