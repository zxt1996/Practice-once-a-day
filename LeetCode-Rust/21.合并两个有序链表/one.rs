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
    pub fn merge_two_lists(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut result = ListNode::new(0);

        // (&mut T) means you have a variable that refers to (&) a value and you are allowed to change (mut) the referred value
        let mut cur = &mut result;
        let (mut one, mut two) = (l1, l2);

        // Both take references(引用) to self and return references to the target type with the same mutability as self.
        // as_ref 是转引用函数, 将具有所有权对象转换成引用对象,
        // 不改变被转换对象的基础上产生一个引用对象.
        // as_mut()是可变(mutable)引用
        // let a: Option<String> = Some("0".to_owned());
        // let b: Option<&String> = a.as_ref();
        while let (Some(oneValue), Some(twoValue)) = (one.as_ref(), two.as_ref()) {
            if oneValue.val < twoValue.val {
                cur.next = one;
                cur = cur.next.as_mut().unwrap();
                one = cur.next.take();
            } else {
                cur.next = two;
                cur = cur.next.as_mut().unwrap();
                two = cur.next.take();
            }
        }

        if one.is_some() {
            cur.next = one;
        } else {
            cur.next = two;
        }
        result.next
    }
}