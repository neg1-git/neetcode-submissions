class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
let l=0
let r=height.length-1
let result=0

while(l<r){
  let hl=height[l];
  let hr=height[r];
  let y=Math.min(hl,hr)
  let x=r-l
  result=Math.max(result,x*y)

  if(hl<hr){
    l++
  }
  else if(hl>hr){
    r--
  }
  else{
    l++
  }

}
return result;
    }
}
