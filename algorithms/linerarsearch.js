

function linearSearch(nums,k){
    if(!k || !nums) return -1;

    for(let i =0; i<nums.length; i++){
        if(nums[i] === k){
            return i
        }
    }
    return -1;
}

linearSearch([1,2,3,4,5,6,7,9],5)