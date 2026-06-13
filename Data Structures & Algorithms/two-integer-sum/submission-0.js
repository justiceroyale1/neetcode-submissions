class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let diffs = new Map();
        let a
        let b;

        for(let i = 0; i < nums.length; i++){
            let difference = target - nums[i];

            if(diffs.has(difference)){
                a = i;
                b = diffs.get(difference);
            }else{
                diffs.set(nums[i], i);
            }
        }

        if(a != b && a !== undefined && b !== undefined){
            return [a, b];
        }
    }
}
