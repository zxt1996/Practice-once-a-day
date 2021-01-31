impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        let mut result = Vec::new();
        if nums.len() == 0 {
            return result;
        }

        if nums.len() == 1 {
            result.push(nums[0].to_string());
            return result;
        }
        let mut start = 0;
        let mut end = 1;

        while end < nums.len() {
            if end == nums.len() - 1 {
                if nums[end] == nums[end - 1] + 1 {
                    let temp = nums[start].to_string() + "->" + &nums[end].to_string();
                    result.push(temp);
                } else if end > 1 && nums[end - 1] == nums[end - 2] + 1 {
                    let temp = nums[start].to_string() + "->" + &nums[end-1].to_string();
                    result.push(temp);
                    result.push(nums[end].to_string());
                } else {
                    result.push(nums[start].to_string());
                    result.push(nums[end].to_string());
                }
                end += 1;
            } else if nums[end] != nums[end-1] + 1 {
                let mut temp = String::new();
                if start + 1 == end {
                    temp = nums[start].to_string();
                } else {
                    temp = nums[start].to_string() + "->" + &nums[end-1].to_string();
                }
                result.push(temp);
                // println!("{} - {}", start, end);
                start = end;
                end = start + 1;
            } else {
                end += 1;
            }
        }

        return result;
    }
}