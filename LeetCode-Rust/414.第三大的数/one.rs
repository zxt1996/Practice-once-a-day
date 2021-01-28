use std::collections::HashSet;

impl Solution {
    pub fn third_max(nums: Vec<i32>) -> i32 {
        let mut set: HashSet<i32> = nums.into_iter().collect();

        let mut v: Vec<&i32> = set.iter().collect();
        v.sort();

        if v.len() < 3 {
            *v[v.len() - 1]
        } else {
            *v[v.len() - 3]
        }
    }
}