class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      
      let counts={}
      for(let n of nums){
        counts[n]=(counts[n]||0)+1
      }

      let buckets = Array.from({ length: nums.length + 1 }, () => []);

      for(let n in counts){
        let freq= counts[n];
        buckets[freq].push(Number(n))
      }

      let output = [];
for (let i = buckets.length - 1; i >= 0; i--) {
    if (buckets[i].length > 0) {
        for (let num of buckets[i]) {
            output.push(num);
            if (output.length === k) {
                return output; 
            }
        }
    }
}
    }
}
