/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var getMinimumDifference = function(root) {
    if (!root) {
        return 0;
    }

    let getResultList = (node) => {
        if (!node) {
            return [];
        }

        return [...getResultList(node.left), node.val, ...getResultList(node.right)];
    }

    let tempList = getResultList(root);
    let resultMin;

    for (let i = 0; i < tempList.length - 1; i++) {
        let num = Math.abs(tempList[i + 1] - tempList[i]);

        if (!resultMin) {
            resultMin = num;
        } else {
            resultMin = resultMin > num ? num : resultMin;
        }
    }

    return resultMin;
};