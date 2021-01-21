impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut temp: Vec<i32> = Vec::new();
        let len = nums.len();

        for (i, n) in nums.iter().enumerate() {
            for (j, data)in nums.iter().enumerate() {
                if n + data == target && i < j {
                    temp.push(i as i32);
                    temp.push(j as i32);
                }
            }
        }

        return temp;
    }
}