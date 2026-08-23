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
     * @return {number}
     */

    maxDepth(root) {

        let a=0;

        if(root===null){return 0}

        let left=this.maxDepth(root.left);
        let right=this.maxDepth(root.right);

        a=Math.max(left,right)+1;
        return a;
    }
}
