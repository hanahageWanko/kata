/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * 与えられた文字列 s に含まれる母音文字（'a'、'e'、'i'、'o'、'u'）を逆順に並べ替え、それ以外の文字はそのまま残した文字列を返してください。
 * 
 * 
 * この問題は、与えられた文字列内の母音文字を逆順に並べ替えるシンプルな文字列操作の問題。
 * 与えられた文字列をループして、母音文字を抽出し逆順に組み立てることで解決できる。
 * 
 * ==========================
 * Example 1:
 * 
 * Input: s = "hello"
 * Output: "holle"
 * ==========================
 * ==========================
 * Example 2:
 * Œ
 * Input: s = "leetcode"
 * Output: "leotcede"
 * ==========================
 */

function reverseVowels(s: string): string {
    const vowels = "aeiouAEIOU";
    const vowelStack: string[] = [];
    const result: string[] = [];

    for (const char of s) {
        if (vowels.includes(char)) {
            vowelStack.push(char);
        }
    }

    for (const char of s) {
        if (vowels.includes(char)) {
            result.push(vowelStack.pop()!);
        } else {
            result.push(char);
        }
    }

    return result.join("");
}