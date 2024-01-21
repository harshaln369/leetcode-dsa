type Matches = { [key: string]: number };
function twoSum(nums: number[], target: number): number[] | undefined {
  const matches: Matches = {};

  for (let i = 0; i < nums.length; i++) {
    if (matches[nums[i]] === undefined) {
      matches[target - nums[i]] = i;
    } else {
      return [matches[nums[i]], i];
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));
