// コーラを買います
// コーラの空き瓶を4本集めると、おまけで新しいコーラもう1本くれます
// 例えば4本買った時に最終的に手に入るコーラは5本です
// 例えば16本買った時に最終的に手に入るコーラは21本です
// n本買った時に最終的に手に入るコーラの数を計算してください

var RATE = 4;

module.exports = function cokeBonus(number) {
  if (number > 0) {
    return number + Math.floor((number - 1) / (RATE - 1));
  } else {
    return 0;
  }
};
