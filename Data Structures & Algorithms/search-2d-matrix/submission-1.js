class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    
let left=0;
let right= matrix.length-1

while(left<=right){
  let mid= Math.floor((left+right)/2)

  if(target < matrix[mid][0]){
    right=mid-1
  }else if(target>matrix[mid][matrix[mid].length-1]){
    left=mid+1
  }else{
  let m= matrix[mid]
  let l=0;
  let r=m.length-1

  while(l<=r){
    const middle=Math.floor((l+r)/2);
    if(target<m[middle]){
      r=middle-1
    }
    else if(target>m[middle]){
      l=middle+1
    }
    else{
      return true 
    }
  }
  return false
  }
}
return false

    }
}
