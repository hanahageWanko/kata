<?php

/*
与えられた整数 n と k の範囲から、
k 個の数を選んで作成可能なすべての組み合わせを見つける関数
*/
class Solution {

    /**
     * 与えられた n と k の値に基づいて、全ての組み合わせを見つける
     * @param Integer $n 要素の最大値
     * @param Integer $k 要素の組み合わせ個数
     * @return Integer[][] 返却値
     */
    function combine(Int $n, Int $k) {
        $result = [];
        $remainNums = [];
        // 1〜nまでの整数を配列に格納
        for($i = 1 ; $i <= $n ; $i++) {
          $remainNums[] = $i;
        }
        // $remainNums = [1, 2, 3, 4]になっている

        $this->list($k, $result, [], $remainNums);
        return $result;
    } 
    

    /**
     * 範囲 [1, n] から k 要素の組み合わせを見つける
     * @param Integer $k 要素の組み合わせ個数
     * @param Integer[][] &$result 返却値
     * @param Integer[] $combinations 現在の組み合わせを保持する配列
     * @param Integer[] $remainNums 要素の最大値までの値が格納された配列
     */
    function list($k, &$result, $combinations, $remainNums) { 
      // 現在の組み合わせを保持する配列に$kの値が含まれている場合
      if (count($combinations) == $k) {
         // 結果用配列に組み合わせ配列を挿入する
         array_push($result, $combinations);
      }
      // 要素の最大値までの個数を変数に代入
      $remainNumsLength = count($remainNums);

      // $remainNums 配列から要素を1つずつ取り出し、
      // 組み合わせ配列 $combinations に追加して再帰的に list 関数を呼び出す
      foreach ($remainNums as $index => $value) {
            //　現在の組み合わせ配列を変数に代入
            $combinationsAfter = $combinations;
            // 現在の組み合わせにとして、ループの値を追加
            array_push($combinationsAfter, $value);
            // 現在処理した値を除外して、新たに配列を生成
            $remainNumsAfter = array_slice($remainNums, $index + 1, $remainNumsLength - $index);
            $this->list($k, $result, $combinationsAfter, $remainNumsAfter);
        }
    }
}