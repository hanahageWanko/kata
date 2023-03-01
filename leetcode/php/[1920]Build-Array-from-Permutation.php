<?php
class Solution {

  /**
   * @param Integer[] $nums
   * @return Integer[]
   */
  function buildArray($nums) {
      $arr = [];
      for($i = 0; $i <= count($nums)-1; $i++) {
          $arr[] = $nums[$nums[$i]];
      }
      return $arr;
  }
}