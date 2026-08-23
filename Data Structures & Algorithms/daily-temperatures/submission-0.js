class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

// Pre-fill the output array with 0s. 
// If a day never finds a warmer temperature, it just stays 0.
let output = new Array(temperatures.length).fill(0); 
let stack = []; // THIS WILL ONLY HOLD INDICES

for (let i = 0; i < temperatures.length; i++) {
    let currentTemp = temperatures[i];

    // THE ENGINE:
    // While the stack is NOT empty 
    // AND the currentTemp is GREATER THAN the temperature of the index sitting at the top of the stack...
    while ( stack.length!==0 && currentTemp>temperatures[stack[stack.length-1]] ) {
        
        // 1. Pop the top index off the stack. Let's call it 'parkedIndex'.
        let parkedIndex=stack.pop()
        
        // 2. Calculate the distance: i - parkedIndex
        let a=i-parkedIndex
        
        // 3. Put that distance into the output array at the parkedIndex position: output[parkedIndex] = distance
        output[parkedIndex]=a
    }

    // After resolving any older colder days, park the current day's index to wait for its own warmer day.
    stack.push(i);
}

return output;

    }
}
