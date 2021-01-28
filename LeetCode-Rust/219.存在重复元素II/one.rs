use std::collections::HashMap;

impl Solution {
    pub fn contains_nearby_duplicate(nums: Vec<i32>, k: i32) -> bool {
        let mut map = HashMap::new();

        for i in 0..nums.len() {
            let mut temp = match map.get(&nums[i]) {
                Some(&x) => {
                    if (x as i32 - i as i32).abs() <= k {
                        true
                    } else {
                        map.insert(&nums[i], i);
                        false
                    }
                },
                None => {
                    map.insert(&nums[i], i);
                    false
                }
            };

            if temp {
                return true;
            }
        }

        false
    }
}