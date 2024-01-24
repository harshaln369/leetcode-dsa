type ParDict = { [key: string]: string };
const parenthesisDictionary: ParDict = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in parenthesisDictionary) stack.push(s[i]);
    else if (s[i] === parenthesisDictionary[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      return false;
    }

    // if (stack.length === 0) return true;
  }
  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
