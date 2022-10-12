/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    let set = [...new Set(candyType)];

    if (set.length > candyType.length / 2) {
        return candyType.length / 2;
    }

    return set.length;
};