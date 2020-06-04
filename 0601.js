var kidsWithCandies = function(candies, extraCandies) {
    var result = [];
    var max = candies[0];
    candies.forEach(function(item){
        if(max<=item){
            max = item
        }
    })
    candies.forEach(function(item){
        if(item+extraCandies>=max){
            result.push(true)
        }else{
            result.push(false)
        }
    })
    return result
};