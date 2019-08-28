/***
 * Excerpted from "Test-Driven React",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tbreact for more book information.
***/
const prepareStr = str => str.toLowerCase().replace(/[^a-z]/g, '');

const isPalindrome = str => {
  const endIndex = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[endIndex - i]) return false;
  }
  return true;
};

const stringStartPalindrome = str => {
  const firstLetter = str[0];
  let lastIndex = str.lastIndexOf(firstLetter);
  while (lastIndex >= 2) {
    const candidate = str.substring(0, lastIndex + 1);
    if (isPalindrome(candidate)) {
      return candidate;
    }
    lastIndex = str.lastIndexOf(firstLetter, lastIndex - 1);
  }
  return null;
};

const palindromes = str => {
  const matches = [];
  let startIndex = 0;
  str = prepareStr(str);
  while (startIndex < str.length / 2) {
    const palindrome = stringStartPalindrome(str.substring(startIndex));
    if (palindrome) {
      matches.push(palindrome);
      startIndex += palindrome.length;
    } else {
      startIndex++;
    }
  }
  return matches;
};

// Attach helpers to the exported function for testing
palindromes.prepareStr = prepareStr;
palindromes.isPalindrome = isPalindrome;
palindromes.stringStartPalindrome = stringStartPalindrome;

module.exports = palindromes;
