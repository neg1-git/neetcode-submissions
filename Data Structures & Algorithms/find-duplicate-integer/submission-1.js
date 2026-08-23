class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // Start both pointers at the very beginning
        let slow = nums[0];
        let fast = nums[0];

        // --- PHASE 1: Find the intersection inside the loop ---
        do {
            slow = nums[slow];           // Tortoise takes 1 step
            fast = nums[nums[fast]];     // Hare takes 2 steps
        } while (slow !== fast);         // They will eventually crash into each other

        // --- PHASE 2: Find the entrance to the loop (The Duplicate) ---
        // Put the tortoise back at the starting line. Leave the hare where it crashed.
        slow = nums[0]; 

        // Now they both take 1 step at a time. 
        // The exact spot they crash into each other again is the duplicate number.
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow; 
    }
}
