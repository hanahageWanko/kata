/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  //Ex:root = [3,9,20,null,null,15,7]
  //q       = [ [3,9,20,null,null,15,7] ]
  let q = [root];
  let result = [];
  // qに値が存在し続ける限りループ
  while (q.length !== 0) {
    let row = [];
    // ループ内でq内の要素を削除する為、ループ数確保のためにlengthを変数に代入しておく
    let qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      // 配列の先頭を切り出して、配列に格納
      let current = q.shift();
      row.push(current.val);
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
    result.push(row);
  }
  return result;
}
