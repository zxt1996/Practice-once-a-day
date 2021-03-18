use std::collections::HashMap;

impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::new();

        for i in nums.iter() {
            if map.contains_key(i) {
                map.insert(i, 2);
            } else {
                map.insert(i, 1);
            }
        }
        for (key, val) in map {
            if val == 1 {
                return *key;
            }
        }
        -1
    }
}