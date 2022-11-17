/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    let current = head;

    while (current) {
        
        while (current.next && current.next.val === val) {
            current.next = current.next.next;
        }

        current = current.next;
    }

    return head;
};