class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

const obj={
    ")":"(",
    "}":"{",
    "]":"["
}
let stack=[]

for(const i of s){
    if(i in obj && stack[stack.length-1]===obj[i]){
        stack.pop(i)
    }else{
    stack.push(i)}
}
if(stack.length===0){return true}
else{return false}

    }
}
