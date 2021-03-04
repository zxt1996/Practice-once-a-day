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
use std::cmp::max;
impl Solution {
    pub fn max_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut depth = 1;
        match root {
            None => 0,
            (Some(val)) => {
                Solution::get_depth(val.borrow().left.clone(), &mut depth, 2);
                Solution::get_depth(val.borrow().right.clone(), &mut depth, 2);
                return depth;
            }
        }
    }

    pub fn get_depth(root: Option<Rc<RefCell<TreeNode>>>, depth: &mut i32, now: i32) {
        if let Some(val) = root {
            *depth = max(*depth, now);
            Solution::get_depth(val.borrow().left.clone(), depth, now + 1);
            Solution::get_depth(val.borrow().right.clone(), depth, now + 1);
        }
    }
}