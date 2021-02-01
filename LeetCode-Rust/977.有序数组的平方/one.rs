impl Solution {
    pub fn sorted_squares(nums: Vec<i32>) -> Vec<i32> {
        let mut one = 0;
        let mut two = nums.len() - 1;
        let mut result = Vec::new();

        while one < two {
            if nums[one].abs() > nums[two].abs() {
                result.insert(0, nums[one].pow(2));
                one += 1;
            } else {
                result.insert(0, nums[two].pow(2));
                two -= 1;
            }
        }

        result.insert(0, nums[two].pow(2));        

        return result;
    }
}