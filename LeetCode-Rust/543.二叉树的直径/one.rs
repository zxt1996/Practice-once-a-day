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
use std::cmp;
impl Solution {
    pub fn diameter_of_binary_tree(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        let mut result = 0;
        Solution::get_all_node(&root, &mut result);
        result
    }

    pub fn get_all_node(root: &Option<Rc<RefCell<TreeNode>>>, result: &mut i32) {
        let mut maxL = 0;
        let mut maxR = 0;
        if let Some(val) = root {
            Solution::get_hei(val.borrow().left.clone(), 1, &mut maxL);
            Solution::get_hei(val.borrow().right.clone(), 1, &mut maxR);
            Solution::get_all_node(&val.borrow().left.clone(), result);
            Solution::get_all_node(&val.borrow().right.clone(), result);
        }

        *result = cmp::max(maxL + maxR, *result);
    }

    pub fn get_hei(root: Option<Rc<RefCell<TreeNode>>>, hei: i32, max: &mut i32) {
        if let Some(val) = root {
            *max = cmp::max(hei, *max);
            Solution::get_hei(val.borrow().left.clone(), hei + 1, max);
            Solution::get_hei(val.borrow().right.clone(), hei + 1, max);
        }
    }
}