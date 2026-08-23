class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1= s.split('').sort().join('')
        let t1= t.split('').sort().join('')

        return s1===t1
    }
}

