// Give an integer `x`, return `true` if `x` is palindrome integer.

// 121 -> true
// -121 -> false

var isPalindrome = function(x) {
  var str = x.toString();
  var rev = str.split("").reverse().join("");
  return str === rev;
};