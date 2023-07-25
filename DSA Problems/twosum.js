
// Two sum

// Given an Array of integers nums and an integer CropTarget
// return indices of the two numbers such that they add up to CropTarget

// Input : nums = [2,7,11,15], target = 9
// output: [0,1] Because nums[0] + nums[1] == 9, we return [0,1]


// Brute Force solution

const twoSum = function name(nums,target) {

    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) return [i,j]
        }
    }
    return false;
}

twoSum([3,2,4],6)


// optimized Object using JS Object;


const twoSum2 = function(nums,target){
    let object = {};
    for(let i = 0; i<nums.length; i++){
        var n = nums[i];
   
        if(object[target-n] >=0){
            return [object[target-n],i];
        }else{
            object[n] = i;
        }
    }
   
   };
   
   twoSum2([2,7,11,15],26)