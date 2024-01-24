type Freq = { [key: string]: number };

function isAnagram(s: string, t: string): boolean {
  let freqS: Freq = {};

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    freqS[s[i]] ? (freqS[s[i]] += 1) : (freqS[s[i]] = 1);
  }
  let freqT: Freq = {};

  for (let i = 0; i < t.length; i++) {
    freqT[t[i]] ? (freqT[t[i]] += 1) : (freqT[t[i]] = 1);
  }

  for (let i = 0; i < t.length; i++) {
    if (freqS[t[i]] !== freqT[t[i]]) {
      return false;
    }
  }
  return true;
}

// using an array
//
function isAnagramWithArray(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const letterCounts = Array<number>(26).fill(0);

  for (let i = 0; i < s.length; i += 1) {
    letterCounts[s.charCodeAt(i) - 97] += 1;
    letterCounts[t.charCodeAt(i) - 97] -= 1;
  }

  for (let i = 0; i < 26; i += 1) if (letterCounts[i] !== 0) return false;

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); //false
