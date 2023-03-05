/**************************
 * Description
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

====================================
Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
====================================
====================================
Example 2:

Input: head = [1,2]
Output: [2,1]
====================================
====================================
Example 3:

Input: head = []
Output: []
====================================
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  // オリジナルリストのコピー
  let current = head;
  let prev = null;
  let next = null;

  //　リストがnullになるまでループ
  while (current) {
    // nextに現在参照している値以降のリストを代入(対象以外のリストを退避)
    next = current.next;
    console.log(next);
    // 現在参照している値以降のリストにリバースしたリストを代入(null⇒[1]⇒[2,1]...)
    current.next = prev;
    console.log(current?.next);
    // リバースリストに現在値を追加する(1 + null⇒2 + 1⇒3 + 2 + 1...)
    prev = current;
    console.log(prev);
    // 今回処理分を除いたリストを計算対象の変数に戻す
    current = next;
    console.log(current);
  }
  return prev;
}
