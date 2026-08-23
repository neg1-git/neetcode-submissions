class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
let l=0;
let r=0;
let count=0;
let set=new Set([]);

while(l<=r&&r<s.length){
  let left=s[l]
  let right=s[r]

  if(!set.has(right)){
    r++
    set.add(right)
  }else{
    l++
    set.delete(left)  }
  console.log(set)
  count=Math.max(count,set.size)
}
return count
    }
}
