'use strict';
function isPalindrome(s) {
  const noSpaces = s.replace(/ /g, '')
  const stringReverse = s.split("").reverse().join("") ;
  return s === stringReverse
}
module.exports = isPalindrome;
