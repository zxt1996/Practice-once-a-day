impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut start = 0;
        let mut end = numbers.len() - 1;

        while numbers[start] + numbers[end] != target {
            let temp = numbers[start] + numbers[end];
            if temp < target {
                start += 1;
            } else {
                end -= 1;
            }
        }

        start += 1;
        end += 1;

        let result = vec![start as i32, end as i32];
        result
    }
}