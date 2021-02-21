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
    pub fn middle_node(head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut fast = head.as_ref().unwrap();
        let mut slow = head.as_ref();
        if fast.next.is_none() {
            return head;
        }
        
        while !fast.next.is_none() && !fast.next.as_ref().unwrap().next.is_none() {
            fast = fast.next.as_ref().unwrap().next.as_ref().unwrap();
            if fast.next.is_none() {
                return slow.unwrap().next.clone();
            }
            slow = slow.unwrap().next.as_ref();
        }

        
        slow.unwrap().next.clone()
    }
}