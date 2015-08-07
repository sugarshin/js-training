// 文字カウントとワードカウントを数える関数を実装する。
// "I have a nice question"が渡された場合は
// { charactors: 18, words: 5 }
// を返す。ただし、カンマ、セミコロンなどの特殊文字はカウントに含まないものとする。
module.exports = function (string) {
  var charactors = string.split('').filter(function(str) {
    return /\w/.test(str);
  }).length;
  var words = string.split(/\s+/).length;

  return {charactors: charactors, words: words};
};
