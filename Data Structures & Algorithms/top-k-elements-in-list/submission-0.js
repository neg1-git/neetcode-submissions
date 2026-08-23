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
    let a=Object.entries(counts)
    a.sort((a, b) => b[1] - a[1])
    let b = a.splice(0,k)

    let output=[]
    for(let c of b){
      output.push(c[0])
    }
    return output.sort()
        }
    }
