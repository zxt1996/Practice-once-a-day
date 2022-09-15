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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let tempList = [root];

    while (tempList.length > 0) {
        let nextList = [];
        let isHadX = false, isHadY = false;

        for (let i = 0; i < tempList.length; i++) {
            if (tempList[i].left && tempList[i].right) {
                let isBrother = tempList[i].left.val === x && tempList[i].right.val === y || tempList[i].left.val === y && tempList[i].right.val === x;
                if (isBrother) {
                    return false;
                }
            }

            if (tempList[i].val === x) {
                isHadX = true;
            }

            if (tempList[i].val === y) {
                isHadY = true;
            }

            tempList[i].left && nextList.push(tempList[i].left);
            tempList[i].right && nextList.push(tempList[i].right);
        }

        if (isHadX && isHadY) {
            return true;
        }

        tempList = nextList;
    }

    return false;
};