/**
 * Given an input string s, reverse the order of the words.
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 * Return a string of the words in reverse order concatenated by a single space.
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 * 
 * 
 * 問題:
 * 与えられた文字列 s に含まれる単語の順序を逆転させ、単語ごとに一つの空白文字で連結した文字列を返してください。
 * 
 * 例:
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 * Explanation:
 * 
 * この例では、入力文字列 "the sky is blue" が与えられています。この文字列には以下の単語が含まれています。
 * 
 * "the"
 * "sky"
 * "is"
 * "blue"
 * これらの単語を逆転させて、"blue is sky the" という文字列を得ます。単語の順序が逆になり、各単語は一つの空白文字で区切られています。
 * 
 * Example 2:
 * Input: s = " hello world "
 * Output: "world hello"
 * Explanation:
 * 
 * この例では、入力文字列 " hello world " が与えられています。この文字列には以下の単語が含まれています。
 * 
 * "hello"
 * "world"
 * ただし、文字列の先頭と末尾に余分な空白が含まれています。問題の要件に従い、余分な空白を取り除いて単語を逆転させると、
 * "world hello" という文字列が得られます。逆転された文字列は先頭と末尾に余分な空白を含まないことに注意してください。
 * 
 * Example 3:
 * Input: s = "a good example"
 * Output: "example good a"
 * Explanation:
 * 
 * この例では、入力文字列 "a good example" が与えられています。この文字列には以下の単語が含まれています。
 * 
 * "a"
 * "good"
 * "example"
 * ただし、単語の間に複数の空白が含まれています。問題の要件に従い、複数の空白を単一の空白に縮小してから、単語を逆転させると、"example good a" という文字列が得られます。逆転された文字列には余分な空白は含まれていません。
 */

function reverseWords(s: string): string {
    // 文字列を単語ごとに分割し、余分な空白を取り除く
    const words = s.split(" ").filter(word => word !== "");
    
    // 単語の順序を逆転させて、単語を一つの空白で連結する
    return words.reverse().join(" ");
}