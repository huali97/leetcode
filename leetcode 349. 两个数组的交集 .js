// leetcode 349 https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/
var intersection = function (nums1, nums2) {
    let arr1 = [], arr2 = [], result = []
    for (let i = 0; i < nums1.length; i++) {
        if (arr1.indexOf(nums1[i]) == -1) {
            arr1.push(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (arr2.indexOf(nums2[i]) == -1) {
            arr2.push(nums2[i])
        }
    }
    if (arr1.length >= arr2.length) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) != -1) {
                result.push(arr2[i])
            }
        }
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr2.indexOf(arr1[i]) != -1) {
                result.push(arr1[i])
            }
        }
    }
    return result
};

let nums1 = [1,2,2,1]
let nums2 = [2,2]

console.log(intersection(nums1,nums2))