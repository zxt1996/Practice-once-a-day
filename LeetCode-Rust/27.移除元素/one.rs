impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut k = 0;

        for i in 0..nums.len() {
            if nums[k] == val {
                nums.remove(k);
                k -= 1;
            }

            k += 1; 
        }

        return nums.len() as i32;
    }
}