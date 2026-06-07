class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let elementCounts = new Map();
        let duplicates = [];

        for(let i = 0; i < nums.length; i++){
            let numRecord = elementCounts.get(nums[i]);
            if(numRecord){
                elementCounts.set(nums[i], numRecord + 1)
            }else{
                elementCounts.set(nums[i], 1);
            }
        }

        duplicates = [...elementCounts.entries()]
            .filter(([key, item]) => item > 1)

        return duplicates.length > 0
    }
}
