int maxProfit(int* prices, int pricesSize){
    int res = 0;
    int min = prices[0];

    for (int i = 1; i < pricesSize; i++) {
        if (prices[i] > min) {
            res = fmax(prices[i] - min, res);
        } else {
            min = prices[i];
        }
    }

    return res;
}