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
  var keysCount = getKeysCount(array);

  objectForEach(keysCount, function(key, val) {
    if (val !== array.length) {
      delete keysCount[key];
    }
  });

  var duplicateKeys = Object.keys(keysCount);

  var resultObject = array.reduce(function(prevObject, currentObject) {
    Object.keys(currentObject).forEach(function(key) {
      if (duplicateKeys.indexOf(key) !== -1) {
        if (!prevObject[key]) {
          prevObject[key] = '' + currentObject[key];
        } else {
          prevObject[key] += '' + currentObject[key];
        }
      }
    });
    return prevObject;
  }, {});

  Object.keys(resultObject).forEach(function(key) {
    resultObject[key] = resultObject[key].split('')
      .filter(function(str, i, array) {
        return array.indexOf(str) === i;
      })
      .sort()
      .join('');
  });

  return resultObject;

};

function objectForEach(object, callback) {
  Object.keys(object).forEach(function (key, i) {
    callback(key, object[key], i, object);
  });
}

function getKeysCount(arrayOfObject) {
  return arrayOfObject.reduce(function(result, current) {
    objectForEach(current, function(key, val) {
      result[key] = result[key] ? result[key] + 1 : 1;
    });
    return result;
  }, {});
}
