<?php
// 文字列検索
class Solution {

    /**
     * @param String $haystack
     * @param String $needle
     * @return Integer
     */
    function strStr(string $haystack, string $needle): int {
        return strpos($haystack, $needle) !== false ? strpos($haystack, $needle) : -1;
    }
}