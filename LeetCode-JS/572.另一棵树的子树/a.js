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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    if (!root && !subRoot) {
        return true;
    }

    let result = true;

    let getResult = (node, subNode) => {
        
        if (!node && !subNode) {
            return ;
        }

        if (!node && subNode || (node && !subNode) || (node.val !== subNode.val)) {
            result = false;
        } else {
            getResult(node.left, subNode.left);
            getResult(node.right, subNode.right);
        }
    }

    let tempList = [root], isHadValue = false;

    while (tempList.length > 0) {
        let nowNode = tempList.pop();

        if (nowNode.val === subRoot.val) {
            isHadValue = true;
            result = true;
            getResult(nowNode, subRoot);

            if (isHadValue && result) {
                break;
            }
        }

        nowNode.left && tempList.push(nowNode.left);
        nowNode.right && tempList.push(nowNode.right);
    }

    return isHadValue && result;
};