var plusOne = function(digits) {
    for (var i=digits.length-1;i>=0;i--){
        digits[i]++
        digits[i] = digits[i]%10
        if(digits[i] != 0){
            return digits
        }
    }
    var digits = new Array(digits.length+1)
    digits[0] = 1;
    for (var i=1;i<digits.length;i++){
        digits[i] = 0
    }
    return  digits
};