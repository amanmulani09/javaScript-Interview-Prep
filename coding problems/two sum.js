var twoSum = function(nums,target){
    if(nums.length === 0) return -1;

    for(let index in nums){
        const pairTarget = target - nums[index];
        console.log(pairTarget)
    }
}

twoSum([1,4,5,6,7,8],9)