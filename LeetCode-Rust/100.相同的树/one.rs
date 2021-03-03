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
    pub fn is_same_tree(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
        match (p, q) {
            (None, None) => true,
            (None, _) => false,
            (_, None) => false,
            (Some(pr), Some(qr)) => {
                // .borrow()：不可变借用被包裹值。同时可存在多个不可变借用
                pr.borrow().val == qr.borrow().val &&
                    Solution::is_same_tree(pr.borrow().left.clone(), qr.borrow().left.clone()) &&
                    Solution::is_same_tree(pr.borrow().right.clone(), qr.borrow().right.clone())
            }
        }
    }
}