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
    pub fn has_path_sum(root: Option<Rc<RefCell<TreeNode>>>, target_sum: i32) -> bool {
        let mut can = false;
        Solution::for_sum(&root, target_sum, &mut can);
        can
    }

    pub fn for_sum(root: &Option<Rc<RefCell<TreeNode>>>, target_sum: i32, can: &mut bool) {
        if let Some(r) = root {
            if r.borrow().val == target_sum && r.borrow().left.is_none() && r.borrow().right.is_none() {
                *can = true;
            } else {
                Solution::for_sum(&r.borrow().left, target_sum - r.borrow().val, can);
                Solution::for_sum(&r.borrow().right, target_sum - r.borrow().val, can);
            }
        }
    }
}