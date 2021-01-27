use std::collections::HashMap;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut map = HashMap::new();

        for i in 0..nums.len() {
            if map.contains_key(&nums[i]) {
                return true;
            }
            map.insert(&nums[i], 1);
        }

        false
    }
}