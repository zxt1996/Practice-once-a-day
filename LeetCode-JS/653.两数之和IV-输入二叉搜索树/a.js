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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    if (!root) {
        return false;
    }

    let getResult = (node) => {
        if (!node) {
            return [];
        }

        return [...getResult(node.left), node.val, ...getResult(node.right)];
    }

    let tempList = getResult(root);

    let left = 0, right = tempList.length - 1;

    while (left !== right) {
        let nowNum = tempList[left] + tempList[right];
        if (nowNum === k) {
            return true;
        } else if (nowNum > k) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return false;
};