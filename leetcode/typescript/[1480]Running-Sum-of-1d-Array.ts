function runningSum(nums: number[]): number[] {
 const result:number[] = [];
 for(let i = 0; nums.length > i ; i++) {
     i <= 0 ? result.push(nums[i]) : result.push(nums[i] + result[i-1])
 }
 return result;
};

