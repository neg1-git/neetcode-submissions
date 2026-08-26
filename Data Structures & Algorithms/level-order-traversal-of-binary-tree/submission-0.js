class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let output = [];
        if (root === null) return output;

        let queue = [root]; 

        while (queue.length > 0) {
            let levelSize = queue.length; 
            let currentLevel = [];        

            for (let i = 0; i < levelSize; i++) {
                let current = queue.shift(); 
                currentLevel.push(current.val); 

                if (current.left) {
                    queue.push(current.left);
                }
                if (current.right) {
                    queue.push(current.right);
                }
            }
            
            output.push(currentLevel); 
        }

        return output;
    }
}
