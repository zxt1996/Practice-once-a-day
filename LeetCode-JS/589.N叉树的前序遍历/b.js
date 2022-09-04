/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let temp = [];
    function mid(r){
        if(!r){
            return ;
        }

        temp.push(r.val);
        for(let i=0;i<r.children.length;i++){
            mid(r.children[i]);
        }
    }

    mid(root);
    return temp;
};