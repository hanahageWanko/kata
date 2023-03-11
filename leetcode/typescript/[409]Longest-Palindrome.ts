/***************
 * Description

 Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

=============================
Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
=============================
=============================
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
=============================
 */

/***************
 * Solution
 */
function longestPalindrome(s: string): number {
  const set = new Set();
  let count = 0;

  for (const c of s) {
    if (set.has(c)) {
      //c が Set 内に存在する場合
      count += 2;
      set.delete(c);
    } else {
      // c が Set内に存在しない場合
      set.add(c);
    }
  }
  return count + (set.size > 0 ? 1 : 0);
}
