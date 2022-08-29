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
 * @return {number[]}
 */
 var findMode = function(root) {
    if (!root) {
        return [];
    }

    let tempList = [], max = 0;

    let getResultList = (node) => {
        if (!node) {
            return [];
        }

        return [...getResultList(node.left), node.val, ...getResultList(node.right)];
    }

    tempList = getResultList(root);

    let resultList = [];

    tempList.forEach((item, index) => {
        let nowNum = tempList.lastIndexOf(item) - index;
        if (nowNum > max) {
            resultList = [item];
            max = nowNum;
            
        } else if (nowNum === max) {
            resultList.push(item);
        }
    });

    return resultList;
};