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
use std::collections::HashMap;
impl Solution {
    pub fn average_of_levels(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<f64> {
        let mut temp = Vec::new();
        let mut map = HashMap::new();
        let mut result = Vec::new();
        Solution::all_num(&root, &mut temp, 0, &mut map);
        
        for i in 0..temp.len() {
            match map.get(&(i as i32)) {
                Some(&x) => { 
                    result.push(x / temp[i] as f64);
                },
                None => {}
            };
        }
        result
    }

    pub fn all_num(root: &Option<Rc<RefCell<TreeNode>>>, temp: &mut Vec<i32>, hei: usize, map: &mut HashMap<i32, f64>) {
        if let Some(val) = root {
            match map.get(&(hei as i32)) {
                Some(&x) => { 
                    map.insert(hei as i32, x + val.borrow().val as f64);
                    temp[hei] += 1;
                },
                None => {
                    map.insert(hei as i32, val.borrow().val as f64);
                    temp.push(1);
                }
            };
            Solution::all_num(&val.borrow().left.clone(), temp, hei + 1, map);
            Solution::all_num(&val.borrow().right.clone(), temp, hei + 1, map);
        }
    }
}