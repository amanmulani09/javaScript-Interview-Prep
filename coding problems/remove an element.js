var removeElement = function(nums, val) {
    if(nums.length === 0) return -1;
    let output =[];
    for(let item in nums){
        if(nums[item] !== val){
            output.push(nums[item])
        }
    }
    return output
};

removeElement([0,1,2,2,3,0,4,2],2)
