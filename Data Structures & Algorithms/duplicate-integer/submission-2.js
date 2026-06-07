class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let elementCounts = new Map();
        let duplicates = false;

        for(let i = 0; i < nums.length; i++){
            let numRecord = elementCounts.get(nums[i]);
            if(numRecord){
                elementCounts.set(nums[i], numRecord + 1);
                duplicates = (elementCounts.get(nums[i]) > 1) || duplicates;
            }else{
                elementCounts.set(nums[i], 1);
            }
        }

        return duplicates;
    }
}
