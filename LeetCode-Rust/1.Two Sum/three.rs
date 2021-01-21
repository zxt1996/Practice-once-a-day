use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();

        for (i, &n) in nums.iter().enumerate() {
            let key = &(target - n);
            if map.contains_key(key) {
                return vec![*(map.get(key).unwrap()) as i32, i as i32];
            }

            map.insert(n, i);
        }

        panic!()
    }
}