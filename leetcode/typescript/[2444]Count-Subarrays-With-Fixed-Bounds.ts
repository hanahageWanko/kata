/*****************
 * Description
 * 
 * You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

================================
Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
================================
================================
Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
================================

Constraints:

2 <= nums.length <= 105
1 <= nums[i], minK, maxK <= 106

 */

/**
 * 考え方
 * 例2は、
  [1], [1], [1], [1],
  [1,1], [1,1], [1,1],
  [1,1,1], [1,1,1],
  および配列全体[1,1,1,1]

  また、連続するサブ配列にはスキップされた要素があってはいけない。
  例えば与えられた[1,2,3,4,5]と[2,3,4] は連続しているが、
  [1,3,5] は隣接していない。
 */

/***********************************
 * Solution
 ***********************************/

function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let ans = 0;
  let j1 = -1,
    j2 = -1,
    k = -1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < minK || nums[i] > maxK) {
      k = i;
    }
    if (nums[i] == minK) {
      j1 = i;
    }
    if (nums[i] == maxK) {
      j2 = i;
    }
    ans += Math.max(0, Math.min(j1, j2) - k);
  }
  return ans;
}
