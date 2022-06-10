/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // Two pointer
    let dummy = new ListNode(0);
    let cur = dummy;
    while(head !== null){
        if(head.val !== val){
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    cur.next = null;
    return dummy.next;
};