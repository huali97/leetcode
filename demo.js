var missingNumber = function(nums) {
  for (var i = 0; i < nums.length+1; i++) {
    if (nums.indexOf(i) == -1) {
      return i
    }
  }
};
