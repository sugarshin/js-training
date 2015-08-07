// オブジェクトのkeyおよびvalueに含まれる数値を合計する関数を実装する。
// 例えば{ k1y: 'val3e' }なら{ key: 1, value: 3 }。
// 連続している場合は1つの数値とし、文字列はNumberにキャストするものとする。
module.exports = function (object) {
  var keys = getKeysAll(object);
  var values = getValuesAll(object);
  return {
    key: getTotalNum(keys),
    value: getTotalNum(values)
  };
};

// string array => 数字抽出してその合計を返す
function getTotalNum(array) {
  var numbers = array.map(function(val) {
    return ('' + val).split(/\D/).filter(function(str) {
      return str !== '';
    }).map(function(str) {
      return str | 0;
    });
  }).reduce(function(a, b) {
    return a.concat(b);
  }, []);

  return numbers.reduce(function(result, current) {
    return result + current;
  }, 0);
}

function getKeysAll(object, _result) {
  var result = _result || [];
  objectForEach(object, function(key, val) {
    result.push(key);
    if (isObject(val)) {
      getKeysAll(val, result);
    }
  });
  return result;
}

function getValuesAll(object, _result) {
  var result = _result || [];
  objectForEach(object, function(key, val) {
    if (isObject(val)) {
      getValuesAll(val, result);
    } else {
      result.push(val);
    }
  });
  return result;
}

function objectForEach(object, callback) {
  Object.keys(object).forEach(function (key, i) {
    callback(key, object[key], i, object);
  });
}

function isObject(x) {
	return typeof x === 'object' && x !== null;
}
