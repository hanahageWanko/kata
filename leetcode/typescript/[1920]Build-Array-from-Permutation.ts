function buildArray(nums: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    let t: number = nums[i];
    res.push(nums[t]);
  }
  return res;
}
