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
 * @return {string}
 */
 var tree2str = function(root) {
    if (!root) {
        return '';
    }

    let getStr = (node) => {
        if (!node) {
            return [];
        }

        let tempList = [];

        if (node.left) {
            tempList.push(...['(', ...getStr(node.left), ')']);
        }

        if (node.right) {
            !node.left && tempList.push('()');
            tempList.push(...['(', ...getStr(node.right), ')']);
        }

        return [node.val, ...tempList];
    }

    return getStr(root).join('');
};