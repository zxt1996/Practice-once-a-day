impl Solution {
    pub fn find_disappeared_numbers(nums: Vec<i32>) -> Vec<i32> {
        let mut num: Vec<i32> = nums.clone();
        num.sort();

        for mut i in 0..num.len() {
            i += 1;
            if num.len() == 0 || num[0] != i as i32 {
                num.push(i as i32);
            } else {
                while num.len() > 0 && num[0] == i as i32 {
                    num.remove(0);
                }
            }
        }

        return num;
    }
}