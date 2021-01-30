use std::cmp;

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut min = prices[0];
        let mut result = 0;

        for i in &prices {
            min = cmp::min(*i, min);
            result = cmp::max(result, *i - min);
        }

        return result;
    }
}