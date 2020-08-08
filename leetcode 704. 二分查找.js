// leetcode 704. 二分查找 https://leetcode-cn.com/problems/binary-search/leetcode-cn.com/problems/binar...
var search = function (nums, target) {
    let low = 0, high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] > target) {
            high = mid
        } else if (nums[mid] < target) {
            low = mid
        } else {
            return mid
        }
    }
    return -1
};