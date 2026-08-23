class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

let operators = ["+","-","*","/"]
let num=[]
let op=[]
let output

for(const token of tokens){
    if(token==='+'){
        output=Number(num[num.length-2])+Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
    }else if(token==='-'){
        output=Number(num[num.length-2])-Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
    }else if(token==='*'){
        output=Number(num[num.length-2])*Number(num[num.length-1])
        num.pop()
        num.pop()
        num.push(output)
    }else if(token==='/'){
        output=Math.trunc(Number(num[num.length-2])/Number(num[num.length-1]))
        num.pop()
        num.pop()
        num.push(output)
    }else{
        num.push(token)
        output=Number(token)
    }
}
return output

    }
}