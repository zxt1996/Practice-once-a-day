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
    pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match root {
            (None) => true,
            (Some(val)) => Solution::left_right_equal(val.borrow().left.clone(), val.borrow().right.clone())
        }
    }

    pub fn left_right_equal(l: Option<Rc<RefCell<TreeNode>>>, r: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match (l, r) {
            (None, None) => true,
            (None, _) => false,
            (_, None) => false,
            (Some(lVal), Some(rVal)) => {
                lVal.borrow().val == rVal.borrow().val 
                    && Solution::left_right_equal(lVal.borrow().left.clone(), rVal.borrow().right.clone())
                    && Solution::left_right_equal(lVal.borrow().right.clone(), rVal.borrow().left.clone())
            }
        }
    }
}