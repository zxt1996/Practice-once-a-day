/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let tempList = [];

    while (head) {
        tempList.push(head.val);
        head = head.next;
    }

    let mid = tempList.length >> 1;

    for (let i = 0; i < mid; i++) {
        if (tempList[i] !== tempList[tempList.length - 1 - i]) {
            return false;
        }
    }

    return true;
};