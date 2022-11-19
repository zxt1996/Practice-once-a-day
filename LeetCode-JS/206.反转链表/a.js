/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let last = head;

    let current = null;

    if (last && last.next) {
        current = last.next;
        last.next = null;
    }

    while (current) {
        let temp = current.next;

        current.next = last;

        last = current;
        current = temp;
    }

    return last;
};