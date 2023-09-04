/**
* n人の子供たちがキャンディを持っています。整数配列 candies が与えられ、
* それぞれの candies[i] は第iの子供が持っているキャンディの数を表し、
* 整数 extraCandies が与えられます。
* extraCandies は、追加で持っているキャンディの数を示します。
* 
* 長さ n のブール型の配列 result を返し、result[i] が真である場合、
* 第 i の子供に extraCandies をすべて与えた後でも、
* 彼らが他のすべての子供よりも最も多くのキャンディを持っている場合です。
* そうでない場合は偽です。
* 
* 複数の子供が最も多くのキャンディを持っていることがあることに注意してください。
* 
* ＜要約＞
* 与えられたキャンディの数とextraCandiesを使用して、
* 各子供が最も多くのキャンディを持つかどうかを判断する必要があります。
* extraCandiesを各子供に加えた場合、
* その子供が最も多くのキャンディを持つかどうかを確認し、結果のブール配列に記録します。
* 具体的には、extraCandiesを各子供に加えた後、
* その子供が最も多くのキャンディを持っているかどうかを確認し、結果のブール配列に記録します。
* もしその子供が最も多くのキャンディを持っている場合はtrue、そうでない場合はfalseとなります。
* 
* ==============================
* Example 1:
* 
* Input: candies = [2,3,5,1,3], extraCandies = 3
* Output: [true,true,true,false,true] 
* Explanation: If you give all extraCandies to:
* - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
* - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
* - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
* - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
* - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
* 
* ==============================
* ==============================
* Example 2:
* 
* Input: candies = [4,2,1,1,2], extraCandies = 1
* Output: [true,false,false,false,false] 
* Explanation: There is only 1 extra candy.
* Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
* 
* ==============================
* ==============================
* Example 3:
* 
* Input: candies = [12,1,12], extraCandies = 10
* Output: [true,false,true]
* 
* ==============================
*/



function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {

    const aryMax = ((a, b) => {return Math.max(a,b)})
    const max = candies.reduce(aryMax)
    const result:boolean[] = candies.map((item) => max <= item + extraCandies);

    return result
};