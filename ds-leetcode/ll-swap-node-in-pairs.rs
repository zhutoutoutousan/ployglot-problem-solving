// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn swap_pairs(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut head = head;
        let mut dummy = Some(Box::new(ListNode::new(0)));
        let mut tail = &mut dummy;
        while let Some(mut node) = head {
            head = node.next.take();
            if let Some(mut next) = head {
                head = next.next.take();
                next.next = Some(node);
                tail.as_mut().unwrap().next = Some(next);
                tail = &mut tail.as_mut().unwrap().next.as_mut().unwrap().next;
            } else {
                tail.as_mut().unwrap().next = Some(node);
                tail = &mut tail.as_mut().unwrap().next.as_mut().unwrap().next;
            }
        }
        dummy.unwrap().next
    }
}