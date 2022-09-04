/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    if (!root) {
        return [];
    }

    let getNodeList = (node) => {
        if (!node) {
            return [];
        }

        let tempList = [];

        node.children.forEach(child => {
            tempList.push(...getNodeList(child));
        })
        return [...tempList, node.val];
    }

    return getNodeList(root);
};