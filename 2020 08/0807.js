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