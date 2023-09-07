/**
 * You have a long flowerbed in which some of the plots are planted, and some are not.
 *  However, flowers cannot be planted in adjacent plots.
 * Given an integer array flowerbed containing 0's and 1's,
 *  where 0 means empty and 1 means not empty,
 *  and an integer n,
 *  return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 * 長い花壇があり、一部のプロットには花が植えられており、一部には植えられていないプロットもあります。
 * ただし、隣接するプロットには花を植えることはできません。
 * 整数の配列 flowerbed が与えられ、0は空きプロットを、1は既に花の植えられたプロットを表します。
 * また、整数 n が与えられます。n個の新しい花を、隣接する花を植えることなく花壇に植えることができるかどうかを判定し、
 * できる場合はtrueを、できない場合はfalseを返してください。
 * この問題は、花壇に新しい花を植える際に隣接する花を避ける必要があるかどうかを確認する問題です。
 * 特定の条件を満たすかどうかをチェックし、結果を返します。
 * 
 * =================
 * Example 1:
 * 
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: true
 * =================
 * =================
 * Example 2:
 * 
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: false
 * =================
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 && // 現在のプロットが空きであること
            (i === 0 || flowerbed[i - 1] === 0) && // 前のプロットも空きであるか、このプロットが最初のプロットであること
            (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // 次のプロットも空きであるか、このプロットが最後のプロットであること
        ) {
            flowerbed[i] = 1; // 新しい花を植える
            count++;
        }
    }
    
    return count >= n; // 植えた花の数が n 以上であれば true、そうでなければ false を返す
};