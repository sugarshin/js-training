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

var _result = {};

module.exports = function simpleObject(object) {
  objectForEach(object, function(key, val) {
    _result[key] = val;
    if (isObject(val)) {
      val = convert(val);
      if (isObject(val)) {
        simpleObject(val);
      } else {
        _result[key] = val;
      }
    } else if (Array.isArray(val)) {
      val.forEach(function(el, i) {
        if (isObject(el)) {
          el = convert(el);
          if (isObject(el)) {
            simpleObject(el);
          }
        }
        _result[key][i] = el;
      });
    } else {
      _result[key] = val;
    }
  });
  // console.log(object)
  return _result;
  // objectForEach(object, function(key, i) {
  //   var value = object[key];
  //   if (Array.isArray(value)) {
  //     value.forEach(function(el, i) {
  //       if (isObject(el)) {
  //         simpleObject(el);
  //       }
  //     });
  //   } else {
  //     if (isObject(value)) {
  //       objectForEach(value, function(k, i) {
  //         if (k === 'N' || k === 'S') {
  //           object[key] = (isNaN(val[k])) ? val[k] : +val[k];
  //         }
  //       });
  //     }
  //   }
  // });
  // return object;
};

function convert(object) {
  var key = Object.keys(object)[0];
  var val = object[key];
  if (key === 'N' || key === 'S') {
    object = (isNaN(+val)) ? val : +val;
    // console.log(object)
  }
  return object;
}

// function simplify(object) {
//   objectForEach(object, function(key, i) {
//     var val = object[key];
//     objectForEach(val, function(k, i) {
//       if (k === 'N' || k === 'S') {
//         object[key] = (isNaN(val[k])) ? val[k] : +val[k];
//       }
//     });
//   });
//   return object;
// }

function simplify(object) {
  objectForEach(object, function(key, val) {
    if (isObject(val)) {
      objectForEach(val, function(k, v) {
        if (k === 'N' || k === 'S') {
          val = (isNaN(+v)) ? v : +v;
        }
      });
    } else if (Array.isArray(val)) {
      val.forEach(function(el, i) {
        if (isObject(el)) {
          simplify(el);
        }
      });
    }
  });
  return object;
}

function objectForEach(object, callback) {
  Object.keys(object).forEach(function (key, i) {
    callback(key, object[key], i, object);
  });
}

function isObject(value) {
  return (value !== null &&
          typeof value !== 'undefined' &&
          Object(value) === value);
}
