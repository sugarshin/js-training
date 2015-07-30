// アルファベットを計上してオブジェクトで返却する関数を実装して下さい
// abcという文字列を渡した時に、{a: 1, b: 1, c: 1}という値を返すようにします。
// 記号は計上せず、大文字がある場合は小文字として同じアルファベットに計上します。
module.exports = function (string) {
  var stringArray = string.toLowerCase().split('');
  var result = {};

  return stringArray.filter(function(str) {
    if (!/[^a-z]/.test(str)) {
      return str;
    }
  }).reduce(function(result, current) {
    if (!result[current]) {
      result[current] = 1;
    } else {
      result[current] += 1;
    }
    return result;
  }, result);
};
