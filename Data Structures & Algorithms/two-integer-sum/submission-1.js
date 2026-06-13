class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let diffs;
        let a
        let b;

        diffs = nums.map((item, index) => {
            let diff = target - item;

            return {
                index,
                diff: target - item,
                exists: nums.filter((item, index2) => index2 != index).includes(diff)
            }
        })

        // for(let i = 0; i < nums.length; i++){
        //     let difference = target - nums[i];

        //     if(diffs.has(difference)){
        //         a = i;
        //         b = diffs.get(difference);
        //     }else{
        //         diffs.set(nums[i], i);
        //     }
        // }

        // if(a != b && a !== undefined && b !== undefined){
        //     return [a, b];
        // }

        return diffs.filter(item => item.exists).map(item => item.index);
    }
}
