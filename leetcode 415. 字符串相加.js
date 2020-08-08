// leetcode 415. 字符串相加 https://leetcode-cn.com/problems/add-strings/leetcode-cn.com/problems/add-s...
var addStrings = function (num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    let result = [];
    while (i >= 0 || j >= 0 || add != 0) {
        const n1 = i >= 0 ? num1.charAt(i) - '0' : 0;//转为数字
        const n2 = j >= 0 ? num2.charAt(j) - '0' : 0;//转为数字
        let temp = n1 + n2 + add;
        result.push(temp % 10);
        add = Math.floor(temp / 10)
        i -= 1;
        j -= 1;
    }
    return result.reverse().join('');
};