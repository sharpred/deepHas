var dh = require("../deepHas"),
    should = require("should"),
    obj;

obj = {
    "top" : {
        "middle" : {
            "bottom" : {
                "val" : "wibble"
            }
        }
    },
    "truthy" : true,
    "falsey" : false
};

dh.set(obj, "top.middle.bottom", {
    "val" : "wobble"
});

//assertions
JSON.stringify(obj).should.equal(JSON.stringify({
    "top" : {
        "middle" : {
            "bottom" : {
                "val" : "wobble"
            }
        }
    },
    "truthy" : true,
    "falsey" : false
}));

dh.set(obj, "top.middle.left", {
    "val" : "wibble"
});

JSON.stringify(obj).should.equal(JSON.stringify({
    "top" : {
        "middle" : {
            "bottom" : {
                "val" : "wobble"
            },
            "left" : {
                "val" : "wibble"
            }
        }
    },
    "truthy" : true,
    "falsey" : false
}));
