// https://leetcode-cn.com/problems/arranging-coins/
var arrangeCoins = function(n) {
    let i = 1
    while(true){
        n = n -i
        if(n<0){
            break
        }
        i++
    }
    return i-1
};
console.log(arrangeCoins(6))