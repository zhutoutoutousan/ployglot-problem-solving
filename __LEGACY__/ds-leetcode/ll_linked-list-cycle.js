/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Data Structure: Hash Table
    let map = {};
    while(head !== null){
        if(map[head.val] === undefined){
            map[head.val] = 1;
        } else {
            return true;
        }
        head = head.next;
    }
    return false;
};