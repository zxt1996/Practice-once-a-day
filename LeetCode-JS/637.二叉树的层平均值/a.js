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
 var averageOfLevels = function(root) {
    if (!root) {
        return [];
    }

    let tempList = [root], resultList = [];

    while(tempList.length > 0) {
        let nextList = [];
        let len = tempList.length, tempNum = 0;
        while (tempList.length > 0) {
            let nowNode = tempList.pop();
            tempNum += nowNode.val;
            nowNode.left && nextList.push(nowNode.left);
            nowNode.right && nextList.push(nowNode.right);
        }

        resultList.push(tempNum / len);
        tempList = [...nextList];
    }

    return resultList;
};