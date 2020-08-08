// 二分查找
// var missingNumber = function (nums) {
//     let low = 0
//     let high = nums.length - 1
//     while (low <= high) {
//         let mid = parseInt((low + high)/2)//转为整数int
//         nums[mid] == mid ? low = mid + 1 : high = mid -1
//     }
//     return low
// };
var missingNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != i){
            return i
        }
    }
};
console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]))