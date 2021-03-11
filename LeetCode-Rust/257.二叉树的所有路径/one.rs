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
    pub fn binary_tree_paths(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<String> {
        let mut result:Vec<String> = Vec::new();
        let mut now = String::from("");
        Solution::get_leaf(&root, &mut result, now.clone());
        result
    }

    pub fn get_leaf(root: &Option<Rc<RefCell<TreeNode>>>, result: &mut Vec<String>, now: String) {
        let mut now = now;
        if let Some(val) = root {
            now += &val.borrow().val.to_string();
            if val.borrow().left.is_none() && val.borrow().right.is_none() {
                result.push(now);
            } else {
                now.push_str("->");
                Solution::get_leaf(&val.borrow().left.clone(), result, now.clone());
                Solution::get_leaf(&val.borrow().right.clone(), result, now.clone());
            }
        }
    }
}