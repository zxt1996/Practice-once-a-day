use std::collections::HashSet;

impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let len = nums.len();
        let mut set: HashSet<i32> = nums.into_iter().collect();
        let mut res = Vec::new();

        for i in 0..len {
            if !set.contains(&(i as i32 + 1)) {
                res.push(i as i32 + 1);
            }
        }

        res
    }
}