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
     * @return {boolean}
     */
    isBalanced(root) {
        let balanced = true; // Assume it's balanced until proven otherwise

        function getDepth(node) {
            if (node === null) return 0;

            let left = getDepth(node.left);
            let right = getDepth(node.right);

            // YOUR INTUITION: Differ the left and right!
            // Math.abs turns a negative number positive so we just get the raw difference
            if (Math.abs(left - right) > 1) {
                balanced = false; 
            }

            // Normal maxDepth handoff
            return Math.max(left, right) + 1;
        }

        getDepth(root);
        return balanced;
    }
}
