//次のような文字列があったときに1がどの位置から何個連続になっているかを判定する。
//001110010000111110
//上記の文字列を以下の様なデータに変換して返すようにする。
//[
//  { start: 2, width: 3 },
//  { start: 7, width: 1 },
//  { start: 12, width: 5 }
//]
//startは文字列全体のどの位置から1が始まっているのか（配列のindexと同じく0スタートとするのでstart: 2の場合は文字列全体の3番目に1があるということ）、widthはいくつ連続して1が存在しているのか、という単純なデータ。
module.exports = function (string) {
  return string.split('0').reduce(function(prev, current, i) {
    var width;
    if (current !== '') {
      if (prev.length > 0) {
        width = prev.reduce(function(a, b) { return a + b.width; }, 0);
      } else {
        width = 0;
      }
      prev.push({start: i + width, width: current.length});
    }
    return prev;
  }, []);
};
