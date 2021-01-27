use std::collections::HashMap;

impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut map: HashMap<i32, i32> = HashMap::new();
        let len = nums.len();
        let mut result = 0;

        for i in 0..len {
            let temp = match map.get(&nums[i]) {
                Some(&x) => { 
                    map.insert(nums[i], x + 1);
                    x + 1
                },
                None => {
                    map.insert(nums[i], 1);
                    1
                }
            };
            if temp > (len / 2) as i32 {
                return nums[i];
            }
        }

        return result;
    }
}