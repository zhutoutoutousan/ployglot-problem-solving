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
var deleteDuplicates = function(head) {
    // Two pointer
    let dummy = new ListNode(0);
    let cur = dummy;
    while(head !== null){
        let next = head.next;
        if(next !== null && next.val === head.val){
            head = next.next;
        } else {
            cur.next = head;
            cur = cur.next;
            head = head.next;
        }
    }
    cur.next = null;
    return dummy.next;
};