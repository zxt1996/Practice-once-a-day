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
    pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        if head.is_none() {
            return None;
        }
        let mut head = head;
        let mut temp = head.as_mut().unwrap();

        while let Some(node) = temp.next.as_mut() {
            if val == node.val {
                temp.next = node.next.take();
            } else {
                temp = temp.next.as_mut().unwrap();
            }
        }
        
        let mut one = head.as_mut().unwrap();
        if one.val == val {
            return head.unwrap().next;
        }
        head
    }
}