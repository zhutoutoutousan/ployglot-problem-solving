/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Create two pointers, one for each list
    // If they intersect, return the node
    // If they don't, return null
    let a = headA;
    let b = headB;
    while(a !== b){
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
};