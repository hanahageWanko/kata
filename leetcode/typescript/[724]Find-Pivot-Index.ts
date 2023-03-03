// ピボットインデックスの抽出
function pivotIndex(nums: number[]): number {
  const totalSum: number = nums.reduce((a, b) => {
    return a + b;
  });

  let leftSum: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}
