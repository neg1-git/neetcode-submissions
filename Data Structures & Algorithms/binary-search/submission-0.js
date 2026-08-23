class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
let l=0
let r=nums.length-1
let o=-1

while(l<=r){
  let m = Math.floor((l+r)/2)
  
  let check=nums[m];

  if(target<check){
    r=m-1
  }
  else if(target>check){
    l=m+1
  }else{
    o=m
    break
  }
}

return o
    }
}
