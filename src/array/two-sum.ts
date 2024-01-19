function twoSum(nums: number[], target: number): number[] | undefined {
  const matches = {};
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (Number.isInteger(matches[number])) return [matches[number], i];

    if (!matches[number]) {
      matches[target - number] = i;
    }
  }
}
