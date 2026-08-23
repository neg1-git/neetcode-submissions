class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let groups ={};
        let output = [];
        

        for (let str of strs){
          let a=[]
          let b =Object.keys(groups);
          let sorted_key=str.split('').sort().join('');
          if(b.includes(sorted_key)){
            groups[sorted_key]=[... groups[sorted_key], str];
          }else{
            groups[sorted_key]=[...a,str];
          }
        }
        return Object.values(groups)
}
}
