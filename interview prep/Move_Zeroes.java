public class Move_Zeroes {
    /*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done? */

//solution one 
//O(n^2)
public void moveZeroes(int[] nums) {

    int pointer =0;
while(pointer < nums.length-1){
    if(nums[pointer] ==0){
        for(int i =pointer; i<nums.length-1; i++)
        {
            nums[i] = nums[i+1];
        }
        nums[nums.length-1] = 0;
    }
    pointer++;
}

}

//solution two
//O(n)
public void moveZeroes2(int[] nums) {
    int zeropointer = 0;

    for(int i =0; i< nums.length ;i++){
    if(nums[i] != 0){
    int temp = nums[i];
    nums[i]=0;
    nums[zeropointer] = temp;
    zeropointer++;
    }
}
}
}
