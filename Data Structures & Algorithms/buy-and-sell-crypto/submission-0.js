class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
let output=0;
let l=0;
let r=1;
while(l<r&&l<prices.length&&r<prices.length){
  let profit = prices[r]-prices[l]
  if(profit<0){
    l=r
    r++
  }else{
    r++
    output=Math.max(profit,output)
  }
}
return output
    }
}
