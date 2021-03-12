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
    pub fn lowest_common_ancestor(root: Option<Rc<RefCell<TreeNode>>>, p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let pV = p.clone().unwrap().borrow().val;
        let qV = q.clone().unwrap().borrow().val;
        match root.clone() {
            None => root,
            Some(rV) => {
                if rV.borrow().val > pV && rV.borrow().val > qV {
                    return Solution::lowest_common_ancestor(rV.borrow().left.clone(), p, q);
                } else if rV.borrow().val < pV && rV.borrow().val < qV {
                    return Solution::lowest_common_ancestor(rV.borrow().right.clone(), p, q);
                } else {
                    return root;
                }
            }
        }
    }
}