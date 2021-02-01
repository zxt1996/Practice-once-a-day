impl Solution {
    pub fn missing_number(mut nums: Vec<i32>) -> i32 {
        nums.sort();

        for i in 0..nums.len() {
            if i as i32 != nums[i] {
                return i as i32;
            }
        }

        return nums[nums.len() - 1] + 1;
    }
}