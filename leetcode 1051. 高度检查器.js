// https://leetcode-cn.com/problems/height-checker/
var heightChecker = function (heights) {
    let result = 0
    //浅拷贝数组，因为arr.sort()排序改变原数组
    let target = heights.concat()
    target = target.sort((n1, n2) => n1 - n2 )
    for (let i = 0; i < heights.length; i++) {
        if(target[i] != heights[i]){
            result ++
        }
    }
    return result
};