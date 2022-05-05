/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let resultMoney = 0, minNum = prices[0];

    prices.forEach(item => {
        let tempNum = item - minNum;
        resultMoney = Math.max(tempNum, resultMoney);
        minNum = Math.min(minNum, item);
    })

    return resultMoney;
};