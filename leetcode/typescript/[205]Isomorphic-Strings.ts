/***************
 * Description
 * 
 * 205. Isomorphic Strings

 * Companies
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may  * map to the same character, but a character may map to itself.
 * 
 *  
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Example 1:
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Example 2:
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Example 3:
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 5 * 104
 * t.length == s.length
 * s and t consist of any valid ascii character.
 */

/**********************************
 * Solution
 *********************************/

function isIsomorphic(s: string, t: string): boolean {
  // 文字数が異なる場合は、その時点でfalseを返却
  if (s.length !== t.length) return false;
  const charMapS = [];
  const charMapT = [];

  // 文字列をループ
  for (let i = 0; i < s.length; i++) {
    // 各Mapには[ e: 0, g: 1 ]のように添え字と添え字の値が何番目に出現するが保存されている
    // Mapに保存されている位置が異なる場合はfalseを返却
    if (charMapS[s.charAt(i)] !== charMapT[t.charAt(i)]) return false;

    // まだMapに保存されていない文字列を「添え字：出現位置」の形式でMapに登録
    charMapS[s.charAt(i)] = i;
    charMapT[t.charAt(i)] = i;
  }
  return true;
}
