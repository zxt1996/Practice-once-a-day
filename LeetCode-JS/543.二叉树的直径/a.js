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
 var diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }

    let getNowNodeMax = (root) => {
        let leftMaxLength = [], rightMaxLength = [];

        let getMaxLength = (node, level, levelList) => {
            if (!node) {
                return ;
            }

            if (levelList.length === 0) {
                levelList.push(level);
            } else if (levelList[0] < level) {
                levelList[0] = level;
            }

            node.left && getMaxLength(node.left, level + 1, levelList);
            node.right && getMaxLength(node.right, level + 1, levelList);
        }

        root.left && getMaxLength(root.left, 1, leftMaxLength); 
        root.right && getMaxLength(root.right, 1, rightMaxLength);

        leftMaxLength = leftMaxLength.length > 0 ? leftMaxLength[0] : 0;
        rightMaxLength = rightMaxLength.length > 0 ? rightMaxLength[0] : 0;
        
        return leftMaxLength + rightMaxLength;
    }

    let allNode = [root], max = 0;

    while (allNode.length > 0) {
        let nowNode = allNode.pop();

        let nowLength = getNowNodeMax(nowNode);
        max = max < nowLength ? nowLength : max;

        nowNode.left && allNode.push(nowNode.left);
        nowNode.right && allNode.push(nowNode.right);
    }

    return max;
};