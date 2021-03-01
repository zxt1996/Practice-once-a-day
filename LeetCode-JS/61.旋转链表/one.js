/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let h = head;
    let start = head;
    let len = 0;

    while (h) {
        len += 1;
        if (!h.next) {
            h.next = start;
            break; 
        } else {
            h = h.next;
        }
    }

    let move = len - k % len;
    while (move > 0) {
        move -= 1;
        start = start.next;
    }

    let now = start;
    while (len - 1 > 0) {
        now = now.next;
        len -= 1;
    }
    now && (now.next = null);
    return start;
};