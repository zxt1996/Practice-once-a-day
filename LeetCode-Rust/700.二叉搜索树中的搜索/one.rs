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
    pub fn search_bst(root: Option<Rc<RefCell<TreeNode>>>, val: i32) -> Option<Rc<RefCell<TreeNode>>> {
        let mut result = None;
        Solution::get_leaf(&root, val, &mut result);
        result
    }

    pub fn get_leaf(root: &Option<Rc<RefCell<TreeNode>>>, vals: i32, result: &mut Option<Rc<RefCell<TreeNode>>>) {
        if let Some(val) = root {
            if val.borrow().val == vals {
                *result = root.clone();
            } else {
                Solution::get_leaf(&val.borrow().right.clone(), vals, result);
                Solution::get_leaf(&val.borrow().left.clone(), vals, result);
            }
        }
    }
}