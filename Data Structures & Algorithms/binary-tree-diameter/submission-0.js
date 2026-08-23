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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function getDepth(node){
            if(node === null) return 0;

            let left = getDepth(node.left);
            let right = getDepth(node.right);

            // Update high score if this path is wider
            maxDiameter = Math.max(maxDiameter, left + right);
            
            // Return the depth to the parent node
            return Math.max(left, right) + 1;
        }
        
        getDepth(root);
        return maxDiameter;
    }
}
