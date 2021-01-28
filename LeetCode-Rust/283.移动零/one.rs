impl Solution {
    pub fn move_zeroes(nums: &mut Vec<i32>) {
        let mut temp = 0;
        for i in 0..nums.len() {
            if nums[temp] == 0 {
                nums.remove(temp);
                nums.push(0);
            } else {
                temp += 1;
            }
        }
    }
}