public class Solution {
    public int[] BuildArray(int[] nums) {
        int[] arr = {};
        for(int i = 0; i <= nums.Length -1 ; i++) {
            // 配列の要素数を増やす
            Array.Resize(ref arr, arr.Length + 1);
            // 配列に要素を追加する
            arr[arr.Length -1] = nums[nums[i]];
        }
        return arr;

    }
}