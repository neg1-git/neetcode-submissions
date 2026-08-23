class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
let numbers= nums.sort((a,b)=>a-b)
let output=[]

for(let t=0 ; t<numbers.length ;t++){
let target=-numbers[t]
let l=t+1
let r=numbers.length-1
if(numbers[t] === numbers[t-1]){continue}
while(l<r){
  let sum=numbers[l]+numbers[r]
  if(sum>target){
    r--
  }
  if(sum<target){
    l++
  }
  if(sum===target){
    output.push([numbers[l],numbers[r],numbers[t]])
    l++
    r--
    while (l < r && numbers[l] === numbers[l - 1]) {
      l++;
    }
  }
}
}

return output
    }
}
