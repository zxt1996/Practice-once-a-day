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
 var findSecondMinimumValue = function(root) {
    if (!root) {
        return -1;
    }

    let resultNumList = [root.val];

    let getResult = (node) => {
        if (!node) {
            return;
        }

        if (resultNumList.length < 2 && !resultNumList.includes(node.val)) {
            node.val > resultNumList[0] ? resultNumList.unshift(node.val) : resultNumList.push(node.val);
        } else if (node.val < resultNumList[resultNumList.length - 1] && !resultNumList.includes(node.val)) {
            resultNumList.pop();
            resultNumList.push(node.val);
        } else if (node.val < resultNumList[0] && !resultNumList.includes(node.val)) {
            resultNumList.shift();
            resultNumList.unshift(node.val);
        }

        getResult(node.left);
        getResult(node.right);
    }

    getResult(root);

    if (resultNumList.length === 2) {
        return resultNumList[0];
    }

    return -1;
};