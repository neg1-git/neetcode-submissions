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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let curr1=l1;
        let curr2=l2;
        let output= new ListNode(0);
        let pointer=output;
        let a=0
        while(curr1!==null||curr2!==null||a==1){

            if(curr1===null && curr2===null) a = a;
            else if(curr1===null) a = a + curr2.val;
            else if(curr2===null) a = a + curr1.val;
            else {a = a + curr1.val + curr2.val;}

            if(a>9){
                a=a-10;
                let dummy = new ListNode(a);
                pointer.next=dummy;
                a=1
            }else{
                let dummy = new ListNode(a);
                pointer.next=dummy;
                a=0
            }
            if (curr1 !== null) {
                curr1 = curr1.next;
            }
            if (curr2 !== null) {
                curr2 = curr2.next;
            }
            pointer=pointer.next
        }
        return output.next
    }
}
