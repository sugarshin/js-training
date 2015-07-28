// アルファベットを計上してオブジェクトで返却する関数を実装して下さい
// abcという文字列を渡した時に、{a: 1, b: 1, c: 1}という値を返すようにします。
// 記号は計上せず、大文字がある場合は小文字として同じアルファベットに計上します。
module.exports = function (string) {
  return string.toLowerCase().split('').filter(function(str) {
    if (!str.match(/[^a-z]/gi)) {
      return str;
    }
  }).reduce(function(a, b) {
    if (!a[b]) {
      a[b] = 1;
    } else {
      a[b] += 1;
    }
    return a;
  }, {});
};
