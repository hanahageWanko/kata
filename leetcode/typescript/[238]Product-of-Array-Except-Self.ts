/**
 * Given an integer array nums, 
 * return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * 整数の配列 nums が与えられた場合、配列 answer を返すアルゴリズムを実装してください。
 * この answer 配列の各要素 answer[i] は、nums 配列の要素 nums[i] を除いたすべての要素の積となります。
 * また、どのプレフィックス（先頭部分）またはサフィックス（末尾部分）の積も、32ビット整数に収まることが保証されています。
 * この問題では、時間計算量が O(n) で、除算操作を使用しないアルゴリズムを設計する必要があります。
 * 
 * 配列内の各要素を除いた他の要素の積を計算するアルゴリズムを効率的に解くことが求められる
 * また、除算操作を使用せずに実現する必要がある
 * 
 * =====================================
 * Example 1:
 * 
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * 解説
 * この例では、入力配列 nums が [1,2,3,4] です。各要素 nums[i] について、それを除いたすべての要素の積を計算する必要がある
 * 
 * answer[0] は [2,3,4] の積なので 2*3*4 = 24 になる
 * answer[1] は [1,3,4] の積なので 1*3*4 = 12 になる
 * answer[2] は [1,2,4] の積なので 1*2*4 = 8 になる
 * answer[3] は [1,2,3] の積なので 1*2*3 = 6 になる
 * したがって、answer 配列は [24,12,8,6] となる

 * =====================================
 * =====================================
 * Example 2:
 * 
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * 
 * 解説
 * answer[0] は [1,0,-3,3] の積なので 1*0*-3*3 = 0 になる。
 * nswer[1] は [-1,0,-3,3] の積なので -1*0*-3*3 = 0 になる。
 * nswer[2] は [-1,1,-3,3] の積なので -1*1*-3*3 = 9 になる。
 * nswer[3] は [-1,1,0,3] の積なので -1*1*0*3 = 0 になる。
 * nswer[4] は [-1,1,0,-3] の積なので -1*1*0*-3 = 0 になる。
 * したがって、answer 配列は [0,0,9,0,0] となる。
 * 
 * この問題は、配列内の各要素を除いた他の要素の積を計算するアルゴリズムを効率的に解くことが求められる。
 * また、除算操作を使用せずに実現する必要がある。
 * =====================================
 */

function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const leftProducts = new Array(n);
    const rightProducts = new Array(n);
    const result = new Array(n);

    // 左側の累積積を計算
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        leftProducts[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // 右側の累積積を計算
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        rightProducts[i] = rightProduct;
        rightProduct *= nums[i];
    }

    // 答えを計算
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;
}