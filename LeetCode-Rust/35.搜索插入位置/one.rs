impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        if target < nums[0] {
            return 0;
        }
        for i in 0..nums.len() {
            if nums[i] == target {
                return i as i32;
            }

            if i < nums.len() - 1 && target < nums[i + 1] && target > nums[i] {
                return (i as i32)+1;
            }
        }

        nums.len() as i32
    }
}