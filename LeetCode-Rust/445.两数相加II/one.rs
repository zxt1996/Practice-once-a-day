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
    pub fn add_two_numbers(mut l1: Option<Box<ListNode>>, mut l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut one = Vec::new();
        let mut two = Vec::new();
        let mut temp = 0;
        let mut res = Box::new(ListNode::new(0));
        let mut head = &mut res.next;
        let mut need = Vec::new();

        while let Some(valOne) = l1 {
            one.push(valOne.val);
            l1 = valOne.next;
        }

        while let Some(valOne) = l2 {
            two.push(valOne.val);
            l2 = valOne.next;
        }

        while one.len() > 0 || two.len() > 0 {
            let mut now = 0;
            if one.len() > 0 && two.len() > 0 {
                now += (one.pop().unwrap() + two.pop().unwrap() + temp);
            } else if one.len() == 0 && two.len() > 0 {
                now += (two.pop().unwrap() + temp);
            } else if one.len() > 0 && two.len() == 0 {
                now += (one.pop().unwrap() + temp);
            }
            
            if now > 9 {
                need.push(now - 10);
                temp = 1;
            } else {
                need.push(now);
                temp = 0;
            }
            
        }

        if temp == 1 {
            need.push(1);
        }

        need.reverse();
        let myIter = need.iter();
        for val in myIter {
            *head = Some(Box::new(ListNode::new(*val)));
            head = &mut head.as_mut().unwrap().next;
        }

        res.next
    }
}