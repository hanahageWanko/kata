/**
 * TODO
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
二つの文字列 s と t について、"t divides s" とは、s = t + ... + t であるときに成り立つ関係です
（つまり、tは自身を一つ以上連結してsと一致する場合を指します）。
与えられた二つの文字列 str1 と str2 に対して、str1とstr2の両方に割り切れる最大の文字列 x を返してください。
与えられた二つの文字列に対して、どちらも割り切れる最大の共通文字列を見つける問題です。
========
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
"ABC" は "ABCABC" を割り切ります（2回繰り返される）。
"ABC" は "ABC" を割り切ります（1回繰り返される）。
したがって、"ABC" は両方の文字列 "str1" と "str2" を割り切ります。
========
========
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
"AB" は "ABABAB" を割り切ります（3回繰り返される）。
"AB" は "ABAB" を割り切ります（2回繰り返される）。
したがって、"AB" は両方の文字列 "str1" と "str2" を割り切ります。
========
========
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
========

 */

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return ""; // str1とstr2を連結してもstr2とstr1を連結しても異なる場合、共通の文字列は存在しない
    }
    
    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
    const gcdLength = gcd(str1.length, str2.length); // str1とstr2の文字列長さの最大公約数を求める
    
    return str1.substr(0, gcdLength); // str1の最初から最大公約数分の部分文字列が解答
}