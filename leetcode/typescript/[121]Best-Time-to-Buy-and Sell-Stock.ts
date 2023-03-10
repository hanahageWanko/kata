/*******
 * Description
 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

====================================
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
====================================
====================================
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
====================================
 */

/********
 * Explanation
最初に、配列の最初の位置と2番目の位置に左右のポインタを初期化。
左側は株を買う時、右側は株を売る時とする。

最大利益が出る差分をmaxProfitとし、0で初期化。

「whileループを開始」
Rightポインタが配列の長さより小さい限り実行。
例えば：
prices=[7,1,5,3,6,4]
注意：
prices[left] --> 株を買う
prices[right] --> 株を売る

ステップ1：

price[left]=7 price[right]=1 profit=-6
ここで、price[left]がprice[right]よりも大きいため、左側のポインタを右に移動し、右側のポインタを1つ増やす。
常に左側のポインタを最小になるようにする。

ステップ2：

price[left]=1 price[right]=5 profit=4
price[left]がprice[right]よりも小さいことため、利益を得ることができる。
maxProfitで管理している値と今回の差分を比較したうえで更新し、右側のポインタだけを移動する。

以下繰り返し。。
 * 
 */

/************
 * Solution
 */
function maxProfit(prices: number[]): number {
  let left = 0; // Buy
  let right = 1; // Sell
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

/**********
 * Another solution
 */

function maxProfit(prices: number[]): number {
  let left = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    left = Math.min(left, prices[i]);
    max = Math.max(max, prices[i] - left);
  }
  return max;
}
