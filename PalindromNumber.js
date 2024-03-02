/*Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

//first brute force method the string method O(n)
let x =1221;

var PalindromNumber = function(number)
{
let sentance = number.toString();
let back= sentance.length -1;
let isPalindrom = false;

for(let front =0; front<sentance.length/2;front++)
{
    if(sentance[front] === sentance[back])
    {
        isPalindrom = true;
    }
    else
    {
        isPalindrom = false;
        return isPalindrom;
    }
    back--;
}
return isPalindrom;
}

//secound string method alot simpler O(n)
var isPalindrome = function(number){
let sentance = number.toString();
let reverse = sentance.split("").reverse().join("");
return sentance ===reverse;
}

//now for the solution where the number is not converted to a string

var isPalindrome = function(y){

let t =y;
let temp =0;
let a = 0
 while(t>0)
 {
    temp = Math.floor(t%10)
    t = (t-temp)/10 
    a = (a*10)+temp
    console.log('a is '+ a)
 }

return y === a
}

/*
endcases things to consider
what if the palindrom has a simbol that is not a number ex -, +
if the palindrom has an odd number of charicters does that affect your function
if the number has a decimal point
for string version ensure all letters are the same lower case
*/