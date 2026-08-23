/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr=head;
        let prev=null;
        let temp;

        while(curr!==null){
            temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
        }
        
        let dummy = new ListNode(0, prev);
        let walker = dummy;

        for(let i=1;i<n;i++){
            walker=walker.next;
        }

        walker.next=walker.next.next;

        curr = dummy.next;
        prev = null;

        while (curr !== null) {
            temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;

    }
}
