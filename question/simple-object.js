//次のようなオブジェクト
// {
//  key1: {N: "12"},
//  key2: {S: "String"}
// }
//を以下のように変換して返す関数を作成する。
//{
//  key1: 12,
//  key2: "String"
//}

module.exports = function simpleObject(object, _ret) {
  var ret = _ret || {};

  objectForEach(object, function(key, val) {
    if (isConvertTarget(val)) {
      ret[key] = convert(val);
    } else if (isObject(val)) {
      ret[key] = {};
      simpleObject(val, ret[key]);
    } else if (Array.isArray(val)) {
      ret[key] = [];
      val.forEach(function(el, i) {
        if (isObject(el)) {
          ret[key][i] = {};
          simpleObject(el, ret[key][i]);
        } else {
          ret[key][i] = el;
        }
      });
    } else {
      ret[key] = val;
    }
  });
  return ret;
};

function convert(object) {
  var key = Object.keys(object)[0];
  var val = object[key];
  return (isNaN(+val)) ? val : +val;
}

function isConvertTarget(value) {
  var keys = Object.keys(value);
  return isObject(value) && keys.length === 1 && (keys[0] === 'N' || keys[0] === 'S');
}

function objectForEach(object, callback) {
  Object.keys(object).forEach(function (key, i) {
    callback(key, object[key], i, object);
  });
}

function isObject(value) {
  return (value !== null &&
          typeof value !== 'undefined' &&
          Object(value) === value &&
          !Array.isArray(value));
}
