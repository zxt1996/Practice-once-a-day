impl Solution {
    pub fn missing_number(nums: Vec<i32>) -> i32 {
        let mut temp = 0;
        let mut result = 0;
        for i in 0..nums.len() {
            temp += i as i32;
            result += nums[i];
        }

        temp += nums.len() as i32;

        return temp - result;
    }
}