impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut result = nums[0];
        let mut now = 0;

        for i in nums {
            if now > 0 {
                now += i;
            } else {
                now = i;
            }

            result = std::cmp::max(result, now);
        }

        result
    }
}