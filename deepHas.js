var _ = require("underscore"),
    get,
    set,
    has,
    index,
    update,
    reduceObject;

reduceObject = function(arg1, arg2) {
    "use strict";
    var arr;
    if (!_.isObject(arg1)) {
        console.log("not an object " + arg1);
        return;
    }
    if (_.isString(arg2)) {
        arr = arg2.split(".");
    } else if (_.isArray(arg2)) {
        arr = arg2;
    }
    return function(func) {
        return arr.reduce(func, arg1);
    };
};
index = function(arg1, i) {
    try {
        if (arg1.hasOwnProperty(i)) {
            return arg1[i];
        }
        return;
    } catch(ex) {
        return;
    }
};
update = function(arg1, i) {
    try {
        if (arg1.hasOwnProperty(i)) {
            return arg1[i];
        } else {
            arg1[i] = {};
        }
        return i;
    } catch(ex) {
        return;
    }
};
has = function(target, path) {
    var test;
    if (target && path) {
        test = get(target, path);
        if (_.isUndefined(test)) {
            return false;
        }
        return true;
    }
    return false;
};
get = function(target, path) {
    var func,
        deep;
    if (target && path) {
        func = reduceObject(target, path);
        deep = func(index);
        return deep;
    }
    return;
};
set = function(target, path, value) {
    var func,
        deep;
    if (target && path) {
        func = reduceObject(target, path);
        deep = func(update);
        console.log(JSON.stringify(target));
        if (deep) {
            return true;
        }
        return false;
    }
    return false;
};

exports.has = has;
exports.get = get;
exports.set = set;
