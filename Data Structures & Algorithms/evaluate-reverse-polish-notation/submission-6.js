class Solution {
    //GEMINI SOLUTION FOR FUTURE REF
    evalRPN(tokens) {
        let num = [];

        for (const token of tokens) {
            if (token === '+') {
                let b = num.pop();
                let a = num.pop();
                num.push(a + b);
            } else if (token === '-') {
                let b = num.pop();
                let a = num.pop();
                num.push(a - b);
            } else if (token === '*') {
                let b = num.pop();
                let a = num.pop();
                num.push(a * b);
            } else if (token === '/') {
                let b = num.pop();
                let a = num.pop();
                num.push(Math.trunc(a / b));
            } else {
                // Store as a Number immediately
                num.push(Number(token));
            }
        }
        
        // The only thing left on the stack is the final answer
        return num.pop(); 
    }
}