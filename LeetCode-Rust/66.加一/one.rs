impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::new();
        let mut k = 0;
        let mut len = digits.len() - 1;

        for i in 0..len+1 {
            let mut temp = digits[len - i] + k;
            if i == 0 {
                temp += 1;
            }
            if temp >= 10 {
                k = 1;
                result.push(temp - 10);
            } else {
                result.push(temp);
                k = 0;
            }
        }

        if k == 1 {
            result.push(1);
        }

        result.reverse();

        result
    }
}