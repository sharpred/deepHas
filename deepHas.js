function recurse(obj, str) {
    return function(func) {
        "use strict";
        if ( typeof str !== "string") {
            return;
        }
        if ( typeof obj !== "object") {
            return;
        }
        return str.split('.').reduce(func, obj);
    };
}

function index(obj, i) {
    try {
        if (obj.hasOwnProperty(i)) {
            return obj[i];
        }
        return;
    } catch(ex) {
        return;
    }
}

function has(target, path) {
    var deep = recurse(target, path),
        test = deep(index);
    if ( typeof test !== "undefined") {
        return true;
    }
    return false;
}

function get(target, path) {
    var deep = recurse(target, path),
        test = deep(index);
    return test;
}

function set(target, path, value) {
    var deep = recurse(target, path),
        test = deep(index);
    if (!target || !path || !value) {
        return false;
    }
    if (test) {
        return true;
    } else {

    }
}

exports.has = has;
exports.get = get;
exports.set = set;
