var _ = require("underscore");
function reduce(obj, str) {
    "use strict";
    if ( typeof str !== "string") {
        return;
    }
    if ( typeof obj !== "object") {
        return;
    }
    function index(obj, i) {
        try {
            console.log("obj: " + JSON.stringify(obj)+ " i: " + i);

            if (obj && obj.hasOwnProperty(i)) {
                return obj[i];
            }
            return;
        } catch(ex) {
            console.error(ex);
            return;
        }
    }

    return str.split('.').reduce(index, obj);
}

function has(target, path) {
    var test = reduce(target, path);
    if ( typeof test !== "undefined") {
        return true;
    }
    return false;
}

function get(target, path) {
    return reduce(target, path);
}

function set(target, path, val) {
    var obj = reduce(target, path);
}

exports.has = has;
exports.get = get;
exports.set = set;