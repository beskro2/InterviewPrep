/*
Given an array of integers nums and an integer target,
 return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

//paramaters
let nums = [2,7,11,15];
let target = 9;
let solution = [];


//maping solution O(n)
var twoSums = function(nums,target)
{

const map1 = new Map();

for(let place =0; place < nums.length; place++)
{
let neededNum = target-nums[place];
if(map1.has(neededNum))
{
    solution=[place,map1.get(neededNum)];
    return solution;
}
else
{
    map1.set(nums[place],place)
}
}
return solution;
}

//their is a worse solution involving nested loops O(n^2)

var twoSums2 = function(nums,target)
{

    for(let slow =0; slow < nums.length; slow++)
    {
        for(let fast=1; fast < nums.length; fast++)
        {
        if(nums[slow]+nums[fast] === target)
        {
            solution=[slow,fast];
            return solution;
        }
        }
    }
return solution;
}

/*
edge cases:
if their ist a solution what should be returned 
    RETURN []

*/