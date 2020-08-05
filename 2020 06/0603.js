var firstMissingPositive = function(nums) {
    var n = 1
    while(true){
        if(nums.indexOf(n) == -1){
            return n
        }else{
            n++
        }
    }
};