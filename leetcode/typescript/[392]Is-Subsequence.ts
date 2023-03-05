/***************
 * Description
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 
=============================
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
=============================
=============================
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
=============================

**** Constraints: ****

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.

*/

/**********************************
 * Solution
 */

function isSubsequence(s: string, t: string): boolean {
  // 抽出対象が抽出したい文字列より短い場合はfalseを返却
  if (s.length > t.length) return false;

  // 抽出したい文字列分でループ
  for (let i = 0; i < s.length; i++) {
    // 抽出したい文字列が見つからない場合はfalseを返却
    if (!t.includes(s[i])) {
      return false;
    } else {
      // 抽出する文字列までの文字を削除する
      t = t.slice(t.indexOf(s[i]) + 1);
    }
  }
  return true;
}
