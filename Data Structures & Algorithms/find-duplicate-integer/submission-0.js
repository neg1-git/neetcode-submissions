class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let a= new Set([])
        let dup;
        
        for(let num of nums){
            if(a.has(num)){
                dup=num;
            }else{
                a.add(num)
            }
        }
        return dup
    }
}
