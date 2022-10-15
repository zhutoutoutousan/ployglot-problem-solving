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
    let result = [];
    if(root === null) return result;
    let stack = [root];
    while(stack.length > 0) {
        let node = stack.pop();
        result.unshift(node.val);
        for(let i = 0; i < node.children.length; i++) {
            stack.push(node.children[i]);
        }
    }
    return result;
};