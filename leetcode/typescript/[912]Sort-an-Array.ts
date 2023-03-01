// 比較関数を用いて文字列的なソートではなく数値的なソートを行う

function sortArray(nums: number[]): number[] {
  return nums.sort(condition);
}

const condition = (a, b) => {
  return a - b;
};
