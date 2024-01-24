function fizzBuzz(n: number): string[] {
  const fizzBuzzArr: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else {
      fizzBuzzArr.push(i.toString());
    }
  }
  return fizzBuzzArr;
}

// elegant way takes less time in leetcode
function fizzBuzzElegant(n: number): string[] {
  return Array(n)
    .fill("")
    .map((_x, index) => {
      index += 1;
      let resultString = "";
      if (index % 3 !== 0 && index % 5 !== 0) {
        return index.toString();
      }
      if (index % 3 === 0) resultString += "Fizz";
      if (index % 5 === 0) resultString += "Buzz";
      return resultString;
    });
}
