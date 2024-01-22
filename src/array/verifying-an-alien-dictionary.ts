type Dict = { [key: string]: number };
function isAlienSorted(words: string[], order: string): boolean {
  // create a object of order
  let dict: Dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (
        dict[words[i][j]] === undefined ||
        dict[words[i + 1][j]] > dict[words[i][j]]
      )
        break;

      if (
        dict[words[i + 1][j]] === undefined ||
        dict[words[i + 1][j]] < dict[words[i][j]]
      )
        return false;
    }
  }
  return true;
}

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")); // true
console.log(
  isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"),
); // false
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz")); // false
