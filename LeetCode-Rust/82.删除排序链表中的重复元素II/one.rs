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
use std::collections::HashSet;

impl Solution {
    pub fn delete_duplicates(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut set = HashSet::new();
        let mut result = Box::new(ListNode::new(0));
        let mut rHead = &mut result.next;
        let mut now = head.as_ref();

        while let Some(node) = now {
            if !set.contains(&node.val) && (node.next.is_none() || node.val != node.next.as_ref().unwrap().val) {
                let tempVal = node.val;
                *rHead = Some(Box::new(ListNode::new(node.val)));;
                rHead = &mut rHead.as_mut().unwrap().next;
            }
            set.insert(node.val);
            now = node.next.as_ref();
        }

        result.next
    }
}