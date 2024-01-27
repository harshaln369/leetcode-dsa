function alphaNumeric(s: string) {
  return s.toLowerCase().replace(/[^0-9a-z]/gi, "");
}

function isPalindrome(s: string): boolean {
  s = alphaNumeric(s);
  if (s.length === 0) return true;
  let lo = 0;
  let hi = s.length - 1;

  while (lo < hi) {
    if (s[lo] !== s[hi]) return false;
    else {
      lo++;
      hi--;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
