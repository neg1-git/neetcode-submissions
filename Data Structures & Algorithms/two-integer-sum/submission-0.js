class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const counts={};
        let index=0;

        for (let i of nums){
            let c = target-i
            if (counts[c]!==undefined){
                return [counts[c],index]
            }else{
                counts[i]=index;
                index++;
            }
        }

    }
}
