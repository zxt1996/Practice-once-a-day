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
    pub fn sorted_array_to_bst(nums: Vec<i32>) -> Option<Rc<RefCell<TreeNode>>> {
        if nums.len() == 0 {
            return None;
        }

        let mut result = TreeNode::new(nums[nums.len()/2]);
        if nums.len()/2 >= 1 {
            result.left = Solution::sorted_array_to_bst(nums[0..nums.len()/2].to_vec());
            result.right = Solution::sorted_array_to_bst(nums[(nums.len()/2 + 1)..nums.len()].to_vec());
        } else {
            result.left = None;
            result.right = None;
        }

        return Some(Rc::new(RefCell::new(result)));
    }
}