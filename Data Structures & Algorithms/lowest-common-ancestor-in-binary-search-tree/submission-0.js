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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root===null) return null;

        let left;
        let right;

        if(root.val<p.val&&root.val<q.val){

            right=this.lowestCommonAncestor(root.right,p,q)
            return right

        }

        else if(root.val>p.val&&root.val>q.val){

            left=this.lowestCommonAncestor(root.left,p,q)
            return left
        }

        else{

            return root

        }
    }
}
