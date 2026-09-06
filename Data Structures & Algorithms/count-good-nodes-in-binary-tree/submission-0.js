class Solution {
    goodNodes(root) {
        let output = 0; // The only global thing we need is the final counter

        // 1. Define the function with two parameters: the node, and the backpack
        function solve(node, maxSoFar) {
            // Base case: If we fall off the tree, stop walking.
            if (node === null) return;

            // 2. Look at the backpack. Are we a Good Node?
            if (node.val >= maxSoFar) {
                output++; 
            }

            // 3. Update the backpack if we found a new high score
            let newMax = Math.max(maxSoFar, node.val);

            // 4. Send clones down the left and right paths, handing them the updated backpack!
            solve(node.left, newMax);
            solve(node.right, newMax);
        }

        // 5. Start the whole process at the root. 
        // The root's backpack just starts with its own value!
        solve(root, root.val);
        
        return output;
    }
}