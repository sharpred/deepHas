var indexFalse,
    indexTrue;

function indexer(val) {
    return function (obj, i) {
        "use strict";
        try {
            if (obj && i && obj.hasOwnProperty(i)) {
                return obj[i];
            } else if (obj && i && val) {
                obj[i] = {};
                return obj[i];
            }
            return;
        } catch (ex) {
            console.error(ex);
            return;
        }
    };
}

indexTrue = indexer(true);
indexFalse = indexer(false);

function reduce(obj, str) {
    "use strict";
    try {
        if (typeof str !== "string") {
            return;
        }
        if (typeof obj !== "object") {
            return;
        }
        return str.split('.').reduce(indexFalse, obj);

    } catch (ex) {
        console.error(ex);
        return;
    }

}

function splitOnDot(str) {
  var result = [];
  var current = "";
  var i = 0;

  while (i < str.length) {
    if (str[i] === ".") {
      result[result.length] = current;
      current = "";
    } else {
      current = current + str[i];
    }
    i = i + 1;
  }

  result[result.length] = current;
  return result;
}

function add(obj, str, val) {
    "use strict";
    try {
        var items = splitOnDot(str);
        if (typeof str !== "string") {
            return;
        }
        /*if (str.indexOf('__proto__') != -1) {
            throw "cannot modify prototype property";
        }*/
        var i = 0;
        while (i < items.length) {
            var k = items[i];

            if ( k === "__proto__" || k === "constructor" || k === "prototype") {
                throw "cannot modify prototype property";
            }

            i = i + 1;
        }
        if (typeof obj !== "object") {
            return;
        }
        if (!val) {
            return;
        }
        //var items = str.split('.');
        var initial = items.slice(0, items.length - 1);
        var last = items.slice(items.length - 1);
        var test = initial.reduce(indexTrue, obj);
        test[last] = val;

    } catch (ex) {
        console.error(ex);
        return;
    }
}

function has(target, path) {
    "use strict";
    try {
        var test = reduce(target, path);
        if (typeof test !== "undefined") {
            return true;
        }
        return false;
    } catch (ex) {
        console.error(ex);
        return;
    }
}

function get(target, path) {
    "use strict";
    try {
        return reduce(target, path);
    } catch (ex) {
        console.error(ex);
        return;
    }
}

function set(target, path, val) {
    "use strict";
    try {
        return add(target, path, val);
    } catch (ex) {
        console.error(ex);
        return;
    }
}

exports.has = has;
exports.get = get;
exports.set = set;
