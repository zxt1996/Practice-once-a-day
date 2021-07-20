class Solution {
    public int maxProfit(int[] prices) {
        int result = 0;

        for (int i = 1; i < prices.length; i++) {
            int nowValue = prices[i] - prices[i - 1];
            if (nowValue > 0) {
                result += nowValue;
            }
        }

        return result;
    }
}