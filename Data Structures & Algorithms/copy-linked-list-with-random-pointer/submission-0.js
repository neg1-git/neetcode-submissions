class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if (head === null) return null;

        // The Map will act as our dictionary: Map(originalNode -> cloneNode)
        let oldToNew = new Map();
        
        let curr = head;

        // --- PASS 1: The Forge ---
        // Walk down the original list and create a brand new clone for every node.
        // Don't wire any arrows yet. Just save them in the map.
        while (curr !== null) {
            oldToNew.set(curr, new Node(curr.val));
            curr = curr.next;
        }

        // --- PASS 2: The Wiring ---
        // Go back to the start of the original list.
        curr = head;

        while (curr !== null) {
            // Grab the clone we forged earlier
            let clone = oldToNew.get(curr);

            // Wire the .next arrow (If curr.next is null, use null instead of asking the map)
            clone.next = oldToNew.get(curr.next) || null;

            // Wire the .random arrow (If curr.random is null, use null)
            clone.random = oldToNew.get(curr.random) || null;

            curr = curr.next;
        }

        // Return the clone of the head node, which is the start of our new cloned list
        return oldToNew.get(head);
    }
}
