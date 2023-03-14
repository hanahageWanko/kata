class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        totalSum = 0
        for i in nums:
            totalSum += i
        leftSum = 0
        for idx,item in enumerate(nums):
            if totalSum - leftSum - nums[idx] == leftSum:
                return idx
            leftSum += nums[idx]
        return -1
