/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
    let pList = [], qList = [], currentP = p, currentQ = q;

    if (p && !q || (!p && q)) {
        return false;
    }

    while (currentP || pList.length > 0) {
        while (currentP) {
            if (!currentQ || currentQ.val !== currentP.val) {
                return false;
            }
            pList.push(currentP);
            currentP = currentP.left;

            qList.push(currentQ);
            currentQ = currentQ.left;

            if (currentP && !currentQ || (!currentP && currentQ)) {
                return false;
            }
        }

        let tempP = pList.pop();
        let tempQ = qList.pop();
        currentP = tempP.right;
        currentQ = tempQ.right;

        
        if (currentP && !currentQ || (!currentP && currentQ)) {
            return false;
        }
    }

    return true;
};