/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let tempList = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
        tempList[i] = Math.min(tempList[i - 1] + cost[i - 1], tempList[i - 2] + cost[i - 2]);
    }

    return tempList[cost.length];
};