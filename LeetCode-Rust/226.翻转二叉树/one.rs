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
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        Solution::invert(&root);
        root
    }

    pub fn invert(root: &Option<Rc<RefCell<TreeNode>>>) {
        if let Some(r) = root {
            // 使用 borrow_mut 在相同作用域中只能创建一个可变引用
            let mut r = r.borrow_mut();
            let temp = r.left.clone();
            r.left = r.right.clone();
            r.right = temp;

            Solution::invert(&r.left);
            Solution::invert(&r.right);
        }
    }
}