// Array
// String
// Object
// Recursion

//--------------------------------------------------------------------------------------------------------------------

// Ques 1. Palindrome Number
// An integer is palindrome when it reads the same forwards and backword

// input x = 121 >>>>> output: true
// Input x = 10 ----->>>>>>>>> output : false;


// my solution using HOF

function findPalindrome(num){
    if(num <0) return false;
    let reversNum = +num.toString().split('').reverse().join('')
    return num === reversNum;
}

// findPalindrome(1221);

// 121 => "121" => ["1","2","1"] =>  ["1","2","1"] => "121"

// RSC solution 1 same like mine 

// optimzed solution if we add edge cased it can be optimize our solution a very much


//--------------------------------------------------------------------------------------------------------------------
// Ques 2 Fibonacci Number

// Fibonacci Series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...

// F(0) = 0, F(1) = 1

// F(n) = F(n-1) + F(n-2), for n > 1

// Input n = 3 ------------->>>>>>>>>> Output: 2

// the series is formed by the sum of previous two numbers

// ex. 0,1,1,2,3,5,8,13,21,34 this is the Fibonacci series 


//solution 1

var fib = function(n){
    const arr = [0,1];
    for(let i = 2; i<=n; i++){
        console.log(i)
        arr.push(arr[i-1] + arr[i-2]); // it calculate the sum of last two numbers in array and push it 
        console.log(arr)
    }
    return arr[n]
}

// fib(5)

// solution 2 using recursion
        
const fibRecur = function(n){
    if(n<=1) return n; 
    
    return fib(n-1) + fib(n-2)
};


//--------------------------------------------------------------------------------------------------------------------

// Ques 3 Valid Anagram

// an anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the origninal letters exactly once.


// input : s = anagram, L  "nagaram" ---------> true
// Input s rat, L, car ---------> output false

// my solution

const findAnagram = function(s,l){
    if(s.length !== l.length) return false;
    return s.split('').sort().join('') === l.split('').sort().join('') ? true : false;
}


// findAnagram('rat','car')

//2 using another apporach

const findAnagram2 = function(s,t){
    if(s.length !== t.length ) return false;
    let obj1 = {};
    let obj2 = {};
    for(let i =0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1; // used to check if any property exist in the Object before
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

// findAnagram2('rat','tar')



//--------------------------------------------------------------------------------------------------------------------

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

// twoSum([3,2,4],6)


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

// twoSum2([2,7,11,15],26)



//--------------------------------------------------------------------------------------------------------------------

// Best time to Buy and sell Stocks

// you are given an array prices where prices[i] is the price of a given stock 
// on the ith day.

// You cant to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to seel that stock
// return the maximum profit, if you cannot achieve ny profit, return 0;

// Input: prices = [7,1,5,3,6,4]; --------->>>>> output:5;
// input : Prices  = [7,6,4,3,1]; --->>>>>>> output : 0;


// Bruit force solutio

const maxProfile = function(prices){

    let globalProfit = 0;

    for(let i =0;  i < prices.length - 1; i++){
        for(let j = i + 1; j<prices.length; j++){
            let currentProfit = prices[j] - prices[i];
            if(currentProfit > globalProfit) globalProfit = currentProfit;
        }
    }
    return globalProfit
}

// maxProfile([7,1,5,3,6,4])
// maxProfile([7,6,4,3,1])


// optimzed solution with greedy algorithm

const maxProfitWithGreedyAlgorithm = function(prices){
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for(let i =0; i<prices.length; i++){
        if(prices[i] < minStockPurchasePrice){ // check whether any stock availble for minimun price that current one if yes then purchase it 
            minStockPurchasePrice = prices[i] // puchase the minimum stock at the lowest price
        }

        profit = Math.max(profit,prices[i] - minStockPurchasePrice)
    }
    return profit;
}

maxProfitWithGreedyAlgorithm([7,1,5,3,6,4])