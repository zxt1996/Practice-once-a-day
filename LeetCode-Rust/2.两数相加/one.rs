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
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut result = Box::new(ListNode::new(0));
        // &mut T:允许你改变你借用的资源
        let mut head = &mut result.next;
        let mut l1 = l1;
        let mut lone = l1.as_ref();
        let mut l2 = l2;
        let mut ltwo = l2.as_ref();
        let mut temp = 0;

        while !lone.is_none() || !ltwo.is_none() {
            let mut value = 0;
            if !lone.is_none() && ltwo.is_none() {
                value = lone.unwrap().val + temp;
                lone = lone.unwrap().next.as_ref();
            } else if lone.is_none() && !ltwo.is_none() {
                value = ltwo.unwrap().val + temp;
                ltwo = ltwo.unwrap().next.as_ref();
            } else {
                value = lone.unwrap().val + ltwo.unwrap().val + temp;
                lone = lone.unwrap().next.as_ref();
                ltwo = ltwo.unwrap().next.as_ref();
            }
            if value > 9 {
                value -= 10;
                temp = 1;
            } else {
                temp = 0;
            }

            *head = Some(Box::new(ListNode::new(value)));
            head = &mut head.as_mut().unwrap().next;
        }

        if temp == 1 {
            *head = Some(Box::new(ListNode::new(1)));
            head = &mut head.as_mut().unwrap().next;
        }
        result.next
    }
}