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
    isValidBST(root) {
        let output = true;

        function solve(node, min, max) {
            if (node === null) return;

            if (node.val <= min || node.val >= max) {
                output = false;
                return;
            }

            solve(node.left, min, node.val);
            solve(node.right, node.val, max);
        }

        solve(root, -Infinity, Infinity);
        return output;
    }
}
