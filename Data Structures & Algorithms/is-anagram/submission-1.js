class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        const counts = {}
        const countt = {}

        for(let i = 0; i < s.length; i++){
            counts[s[i]] = (counts[s[i]] || 0) + 1;
            countt[t[i]] = (countt[t[i]] || 0) + 1
        }

        for (const char in counts){
            if(counts[char] != countt[char]){
                return false
            }
        }

        return true;
    }
}