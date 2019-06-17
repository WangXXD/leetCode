/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line no-unused-vars
var twoSum = function (nums, target) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const needNum = target - element;
        if (map.has(needNum)) {
            return [map.get(needNum), index]
        }
        map.set(nums[index], index);
    }
}
