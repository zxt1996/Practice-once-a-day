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
    pub fn get_kth_from_end(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut fast = head.as_ref();
        let mut slow = head.as_ref();
        let mut number = k;

        while number > 0 {
            fast = fast.unwrap().next.as_ref();
            number = number - 1;
        }

        if !fast.is_some() {
            return head;
        }

        while fast.is_some() && fast.unwrap().next.as_ref().is_some() {
            fast = fast.unwrap().next.as_ref();
            slow = slow.unwrap().next.as_ref();
        }

        slow.unwrap().next.clone() 
    }
}