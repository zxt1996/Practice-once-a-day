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
 var findTilt = function(root) {
    if (!root) {
        return 0;
    }

    let result = 0;

    let getNodeAllChild = (node) => {
        if (!node) {
            return 0;
        }

        let left = getNodeAllChild(node.left);
        let right = getNodeAllChild(node.right);

        result += Math.abs(left - right);

        return left + right + node.val;
    }

    // let tempList = [root], result = 0;

    // while (tempList.length > 0) {
    //     let nowNode = tempList.pop();

    //     let nowNodeSlop = Math.abs(getNodeAllChild(nowNode.left) - getNodeAllChild(nowNode.right));

    //     result += nowNodeSlop;

    //     nowNode.left && tempList.push(nowNode.left);
    //     nowNode.right && tempList.push(nowNode.right);
    // }

    getNodeAllChild(root);

    return result;
};