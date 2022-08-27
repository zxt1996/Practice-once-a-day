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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    if (!root) {
        return [];
    }

    let result = [];

    let getResultList = (node, tempList) => {
        if (!node) {
            return tempList;
        }

        let nextList = [];
        if (tempList.length === 0) {
            nextList = [node.val];
        } else {
            nextList = [...tempList, node.val];
        }

        if (!node.left && !node.right) {
            result.push(nextList.join('->'));
        }

        getResultList(node.left, nextList);
        getResultList(node.right, nextList);
    }

    getResultList(root, []);

    return result;
};