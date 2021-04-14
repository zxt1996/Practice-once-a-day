/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 const mid = (head, root) => {
    if (!head) {
        return true;
    }
    if (!root) {
        return false;
    }

    if (head.val === root.val) {
        return mid(head.next, root.left) || mid(head.next, root.right);
    }
    return false;
}
var isSubPath = function(head, root) {
    if (!root) {
        return false;
    }
    return mid(head, root) || isSubPath(head, root.right) || isSubPath(head, root.left);
};