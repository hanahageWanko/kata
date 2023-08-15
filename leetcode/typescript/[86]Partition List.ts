/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 * 
 * 
 * この問題は、単方向リンクリスト内のノードを特定の条件に基づいて分割する問題。
 * 具体的には、x より小さいノードを前に、x 以上のノードを後ろに移動させるという操作を行う必要がある。
 * ただし、各パーティション内で元の順序を保持しなければならない点に注意が必要。
 * 解法としては、新しいリンクリストを作成してノードを挿入していく方法や、既存のノードを再利用しながら操作を進める方法が考えられる。
 * 最終的には、ノードの移動操作を適切に実装し、条件に従ってリンクリストを分割するアルゴリズムを作成する必要がある。
 */

/**
 * @param val? number  ノードの値を保持するプロパティ。リンクリスト内の要素が持つ実際のデータ。
 * @param next? ListNode|null 次のノードへのリンク（参照）を保持するプロパティ。このプロパティを使って次の要素にアクセスできる。
 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * 
 * @param head ListNode | null
 * @param x number
 * @returns ListNode | null
 * @example head = [1,4,3,2,5,2], x = 3
 */
function partition(head: ListNode | null, x: number): ListNode | null {
    const lessThanX: ListNode = new ListNode(); // ノード値がx未満のリスト
    const greaterThanOrEqualX: ListNode = new ListNode(); // ノード値がx以上のリスト

    let currentLess: ListNode = lessThanX;// ノード値がx未満のリスト
    let currentGreater: ListNode = greaterThanOrEqualX;// ノード値がx以上のリスト
    
    /** 現在のノード(値) */
    let current: ListNode | null = head;
    // リンクリストをループ
    while (current !== null) {
        console.log(current)
        
        // 現在のListNodeを取り出し、xと比較
        if (current.val < x) {
            // x未満用のリンクリストの次に現在のListNodeをセット
            currentLess.next = current;
            // x未満用のリンクリストを現在のListNodeに更新する
            currentLess = current;
        } else {
            // x以上のリンクリストの次に現在のListNodeをセット
            currentGreater.next = current;
            // x以上のリンクリストを現在のListNodeに更新する
            currentGreater = current;
        }
        // 現在のリンクリストを次のListNodeに更新する
        current = current.next;
    }
    // x以上のリストの最後をnullに設定
    currentGreater.next = null;
    // x未満のリストの最後をx以上のリストの先頭に繋げる
    currentLess.next = greaterThanOrEqualX.next; 
    
    return lessThanX.next; // x未満のリストの先頭を返す
}