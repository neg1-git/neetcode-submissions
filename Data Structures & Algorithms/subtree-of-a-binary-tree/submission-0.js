/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        

        function isSameTree(p, q) {
        if(p===null && q===null) return true;
        if(p===null) return false;
        if(q===null) return false;

        let left = isSameTree(p.left,q.left);
        let right = isSameTree(p.right,q.right);

        if( p.val===q.val && left && right) return true
        else return false
        }
        if (root === null) return false;
        if (isSameTree(root, subRoot)) return true;
        
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    
}
