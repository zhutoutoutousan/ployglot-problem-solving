# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        slow = head
        fast = head
        faster = head
        while fast and faster and faster.next and fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
            faster = faster.next.next.next
            if slow == fast or slow == faster or fast == faster:
                return True
        return False