/****************
 * Description
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

========================================
Example 1:

Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
========================================
========================================
Example 2:

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
========================================
 */

// Definition for node.
class NodeType {
  val: number;
  children: NodeType[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: NodeType | null): number[] {
  // 結果用配列の定義
  const result: number[] = [];
  // 二分探索木のメソッドをコール
  return traverse(root, result);
}

const traverse = (tree: NodeType | null, result) => {
  // 対象がnullなら、現状の配列をそのまま返却
  if (!tree) return result;
  // 対象が数値な場合、結果配列の末尾に挿入
  result.push(tree.val);
  for (let i = 0; i < tree.children.length; i++) {
    traverse(tree.children[i], result);
  }
  return result;
};

/************
 * process
 * 
 * Node { val: 2, children: [] }
Node {
  val: 3,
  children: [ Node { val: 6, children: [] }, Node { val: 7, children: [Array] } ]
}
Node { val: 6, children: [] }
Node { val: 7, children: [ Node { val: 11, children: [Array] } ] }
Node { val: 11, children: [ Node { val: 14, children: [] } ] }
Node { val: 14, children: [] }
Node { val: 4, children: [ Node { val: 8, children: [Array] } ] }
Node { val: 8, children: [ Node { val: 12, children: [] } ] }
Node { val: 12, children: [] }
Node {
  val: 5,
  children: [
    Node { val: 9, children: [Array] },
    Node { val: 10, children: [] }
  ]
}
Node { val: 9, children: [ Node { val: 13, children: [] } ] }
Node { val: 13, children: [] }
Node { val: 10, children: [] }
 */
