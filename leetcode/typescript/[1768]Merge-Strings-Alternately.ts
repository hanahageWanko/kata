/**
 * 
You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order,
starting with word1. If a string is longer than the other, 
append the additional letters onto the end of the merged string.
Return the merged string.

与えられた二つの文字列 word1 と word2 をマージし、文字を交互に追加していきます。
この際、マージを word1 から始めます。もし片方の文字列がもう片方よりも長い場合、
余分な文字はマージした文字列の最後に追加されます。最終的なマージ結果を返してください。

 
==========
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
==========
==========
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
==========
==========
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   
==========
 */

function mergeAlternately(word1: string, word2: string): string {
    const maxStrLen = word1.length > word2.length 
                        ? word1.length 
                        : word2.length; 
    let res = ""
    
    for( let i = 0; i < maxStrLen ; i++) {
        res += word1.charAt(i) ?? ''
        res += word2.charAt(i) ?? ''
    }
    return res
};