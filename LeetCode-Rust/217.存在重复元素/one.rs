use std::collections::HashMap;

impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut map = HashMap::new();

        for i in 0..nums.len() {
            let mut temp = 0;

            temp = match map.get(&nums[i]) {
                Some(&x) => {
                    2
                },
                None => {
                    map.insert(&nums[i], 1);
                    1
                }
            };

            if temp == 2 {
                return true;
            }
        }

        false
    }
}