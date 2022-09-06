/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) {
        return null;
    }

    let getResult = (one, two) => {
        if (!one && !two) {
            return null;
        }

        let oneVal = one ? one.val : 0;
        let twoVal = two ? two.val : 0;
        let tempResult = new TreeNode(oneVal + twoVal);

        tempResult.left = getResult(one && one.left, two && two.left);
        tempResult.right = getResult(one && one.right, two && two.right);

        return tempResult;
    }

    return getResult(root1, root2);
};