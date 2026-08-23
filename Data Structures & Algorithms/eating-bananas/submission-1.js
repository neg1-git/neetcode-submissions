class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
let output=Infinity;
let l=1
let r=Math.max(...piles)
while(l<=r){
  let k = Math.floor((l+r)/2)
  let b=0;
  console.log("rate is:",k)
  for (let i = 0; i < piles.length; i++) {

    let a = Math.ceil(piles[i]/k)
    b=a+b
    
  }
  console.log(b);
  if(b<=h){
    output=k
    r=k-1
  }
  else{
    l=k+1
  }
}
  return output
    }
}
