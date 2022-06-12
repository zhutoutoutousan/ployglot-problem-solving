/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Two pointer
    let dummy = new ListNode(0);
    let cur = dummy;
    while(head !== null){
        let next = head.next;
        head.next = cur.next;
        cur.next = head;
        head = next;
    }
    return dummy.next;
};