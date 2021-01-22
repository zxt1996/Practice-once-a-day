impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let len = nums.len();

        if len < 1 {
            return nums.len() as i32;
        }

        let mut k = 0;

        for i in 0..len-1 {
            if k+1 < nums.len() && nums[k] == nums[k+1] {
                nums.remove(k);
                k -= 1;
            }

            k += 1;
        }

        return nums.len() as i32;
    }
}