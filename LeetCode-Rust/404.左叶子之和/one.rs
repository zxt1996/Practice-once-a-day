// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
// 
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn sum_of_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut result = 0;
        Solution::get_left(&root, false, &mut result);
        result
    }

    pub fn get_left(root: &Option<Rc<RefCell<TreeNode>>>, left: bool, result: &mut i32) {
        if let Some(val) = root {
            if val.borrow().left.is_none() && val.borrow().right.is_none() && left {
                *result += val.borrow().val;
            } else {
                Solution::get_left(&val.borrow().left.clone(), true, result);
                Solution::get_left(&val.borrow().right.clone(), false, result);
            }
        }
    }
}