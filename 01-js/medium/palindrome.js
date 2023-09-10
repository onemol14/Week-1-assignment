/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let myArr = str.split("");

  myArr = myArr.filter(function checkPunctuation(ch) {
    const regex = /^[^,.!?]$/;   
    return regex.test(ch);
  });

  myArr = myArr.filter((ch) => ch !== ' ');

  let left = 0, right = myArr.length-1;

  while(left <= right) {
    if(myArr[left] !== myArr[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}


module.exports = isPalindrome;
