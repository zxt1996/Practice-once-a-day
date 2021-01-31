impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut result = 0;

        for i in 1..prices.len() {
            let temp = prices[i] - prices[i-1];
            if temp > 0 {
                result += temp;
            }
        }

        return result;
    }
}