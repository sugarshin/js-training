// いくつかのオブジェクトを要素として含んでいる配列を引数にとり
// 複数の要素のうちキーが重複している場合、
// その値である文字列をdistinctして取得する関数を実装する。
// また、キーに対する値はソートして返却する。
//
// たとえば
// [{
//   hoge: 'eeb'
// }, {
//   hoge: 'aabb',
//   huga: 'cberui'
// }]
// という引数の場合、hogeのみが重複しているので
// {
//   hoge: 'abe'
// }
// を返却する。

module.exports = function (array) {
  var length = array.length;

  var count = getCountKeys(array);
  console.log(count)

  // var duplicateKeys = array.reduce(function(result, current) {
  //   objectForEach(current, function(key, val, i) {
  //     var _r = [];
  //     if (i === 0) {
  //       result.push(key);
  //     } else {
  //       if (result.indexOf(key) !== -1) {
  //         _r.push(key);
  //         result.push(key);
  //       }
  //     }
  //   });
  //   result.indexOf()
  // }, []);
  //
  // var keysAll = array.map(function(object) {
  //   return Object.keys(object);
  // })
  // .reduce(function(a, b) {
  //   return a.concat(b);
  // }, []);
  //
  // var duplicateKeys = array.map(function(object) {
  //
  // var duplicateKeys = array.map(function(object) {
  //   return Object.keys(object);
  // })
  // // flatten
  // .reduce(function(a, b) {
  //   return a.concat(b);
  // }, [])
  // // 重複のみをfilter
  // .filter(function(key, i, keys) {
  //   return keys.indexOf(key) === i && i !== keys.lastIndexOf(key);
  // });
  //
  // var resultObject = array.reduce(function(prevObject, currentObject) {
  //   Object.keys(currentObject).forEach(function(key) {
  //     if (duplicateKeys.indexOf(key) !== -1) {
  //       if (!prevObject[key]) {
  //         prevObject[key] = '' + currentObject[key];
  //       } else {
  //         prevObject[key] += '' + currentObject[key];
  //       }
  //     }
  //   });
  //   return prevObject;
  // }, {});
  //
  // Object.keys(resultObject).forEach(function(key) {
  //   resultObject[key] = resultObject[key].split('')
  //     .filter(function(str, i, array) {
  //       return array.indexOf(str) === i;
  //     })
  //     .sort()
  //     .join('');
  // });
  //
  // return resultObject;

};

function objectForEach(object, callback) {
  Object.keys(object).forEach(function (key, i) {
    callback(key, object[key], i, object);
  });
}

function getCountKeys(arrayOfObject) {
  return arrayOfObject.reduce(function(result, current) {
    objectForEach(current, function(key, val) {
      result[key] = result[key] ? result[key] + 1 : 1;
    });
    return result;
  }, {});
}

// ['a', 'a', 'b'].reduce(function(result, current) {
//     objectForEach(current, function(key, val) {
//       result[key] = result[key] ? result[key] + 1 : 1;
//     });
//     return result;
// }, {}); // {a: 2, b: 1}
