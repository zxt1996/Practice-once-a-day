impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut i = 0;
        let mut j = i + 1;

        while i < nums.len() - 1 {
            while nums[i] != 0 && i < nums.len() - 1 {
                i += 1;
                j += 1;
            }
            if i == nums.len() - 1 {
                break;
            }
            while nums[j] == 0 && j < nums.len() - 1 {
                j += 1;
            }
            
            if nums[i] == 0 && nums[j] != 0 {
                nums.swap(i, j);
            }
            i += 1;
            j = i + 1;
        }
    }
}