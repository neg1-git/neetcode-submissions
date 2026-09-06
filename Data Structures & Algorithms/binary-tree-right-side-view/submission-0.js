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
     * @return {number[]}
     */
    rightSideView(root) {
        let output = [];
        if (root === null) return output;

        let queue = [root]; 

        while (queue.length > 0) {
            let levelSize = queue.length; 
            let currentLevel = [];        

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift(); 
                currentLevel.push(current.val); 
                if (i === levelSize - 1) {
                    output.push(current.val); 
                }
                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }
        }

        return output;
    }
    
}
