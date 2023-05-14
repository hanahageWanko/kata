/**
 * Practice
 * There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k (1 <= k < nums.length)` such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index 3 and become `[4,5,6,7,0,1,2]`.

Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or `-1` if it is not in `nums`.

You must write an algorithm with O(log n) runtime complexity.


 */

/**
 * 与えられた配列がソートされていることを利用して、O(log n) の時間計算量で解を求めることが求められている
 */


/**
 * 二分探索使用して、targetの値を検索する
 * @param nums 検索対象の配列
 * @param target 検索対象の値
 * @returns 
 */

function search(nums: number[], target: number): number {
    // 回転がインデックスが適用されなかった場合の配列の開始値と終了値を変数に代入する
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      // 配列要素の中央値を取得
      const mid = left + Math.floor((right - left) / 2);
  
      // ターゲットを見つけたら返却
      if (nums[mid] === target) return mid;
  
      if (nums[left] <= nums[mid]) {
        // 左半分がソートされている場合
        if (nums[left] <= target && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        // 右半分がソートされている場合
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1;
  }