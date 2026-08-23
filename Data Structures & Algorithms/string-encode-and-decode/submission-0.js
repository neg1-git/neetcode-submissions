class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let a=''
        for(let str of strs){
            a=a+str.length+'#'+str;
        }
        return a
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            let dashIndex = str.indexOf('#', i);
            let wordLength = Number(str.slice(i, dashIndex));
            let wordStart = dashIndex + 1;
            let wordEnd = wordStart + wordLength;
            let actualWord = str.slice(wordStart, wordEnd);
            
            result.push(actualWord);
            i = wordEnd; 
        }

        return result;
    }
}
