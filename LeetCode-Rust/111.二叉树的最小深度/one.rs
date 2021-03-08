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
    pub fn min_depth(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
        if root == None {
            return 0;
        }
        let mut min = i32::MAX;
        Solution::recursion_for_min(&root, 1, &mut min);
        min
    }

    pub fn recursion_for_min(root: &Option<Rc<RefCell<TreeNode>>>, hei: i32, allArg: &mut i32) {
        if let Some(val) = root {
            match (&val.borrow().left, &val.borrow().right) {
                    (None, None) => {
                        *allArg = cmp::min(*allArg, hei);
                    },
                    (None, _) => {
                        Solution::recursion_for_min(&val.borrow().right, hei + 1, allArg);
                    },
                    (_, None) => {
                        Solution::recursion_for_min(&val.borrow().left, hei + 1, allArg);
                    },
                    (_, _) => {
                        Solution::recursion_for_min(&val.borrow().left, hei + 1, allArg);
                        Solution::recursion_for_min(&val.borrow().right, hei + 1, allArg);
                    }
                }
        }
    }
}