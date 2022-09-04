/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    if (!root) {
        return [];
    }

    let getNodeList = (node) => {
        if (!node) {
            return [];
        }

        let childrenList = [];

        node.children.forEach(child => {
            childrenList.push(...getNodeList(child));
        })

        return [node.val, ...childrenList];
    }

    return getNodeList(root);
};