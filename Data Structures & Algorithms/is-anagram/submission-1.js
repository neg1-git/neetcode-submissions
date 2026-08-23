class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length!==t.length) return false

        let counts={};

        for (let i of s){
            counts[i]=(counts[i]||0)+1
        }

        for (let i of t){
            if(!counts[i]) {return false}

            counts[i]--;
        }
        return true
    }
}
