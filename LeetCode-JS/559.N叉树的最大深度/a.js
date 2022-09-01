/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    let max = 0;

    let getDep = (node, level) => {
        if (!node) {
            return 0;
        }

        max = Math.max(max, level);

        node.children.forEach(item => item && getDep(item, level + 1));
    }

    getDep(root, 1);

    return max;
};