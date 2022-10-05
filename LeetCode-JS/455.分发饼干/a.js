/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let result = 0, gPos = 0;

    s.forEach(item => {
        for (let i = gPos; i < g.length; i++) {
            if (item >= g[i]) {
                result += 1;
                gPos = i + 1;
                break;
            }
        }
    });

    return result;
};