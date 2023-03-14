from ast import List


class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(len(nums)):
            curr = 0 if i == 0 else result[i-1]
            result.append(nums[i] + curr)
        return result