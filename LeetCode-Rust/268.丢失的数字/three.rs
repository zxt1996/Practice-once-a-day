impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut result = (nums.len() as i32);

        for (i, &n) in nums.iter().enumerate() {
            result ^= (i as i32);
            result ^= n;
        }

        result
    }
}