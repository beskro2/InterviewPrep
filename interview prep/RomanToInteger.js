/* 
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together.
12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four.
The same principle applies to the number nine, which is written as IX.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/*
first approach uses an array to store the roman numerals
then run through the array and replace the roman numerals with the corresponding numbers
the reading from left to right if a number at a 
*/

var romanToInt = function(s)
{
let total =0
//transfers the string to an array
let myArray = s.split("")
//replaces each roman numeral in the array with corresponding number
for(let i = 0; i< myArray.length; i++){
    if (myArray[i] === 'I')
    {
      myArray[i] = 1
    }
    else if(myArray[i] === 'V')
    {
      myArray[i] = 5
    }
    else if(myArray[i] === 'X')
    {
      myArray[i] = 10
    }
    else if(myArray[i] === 'L')
    {
      myArray[i] = 50
    }
    else if(myArray[i] === 'C')
    {
      myArray[i] = 100
    }
    else if(myArray[i] === 'D')
    {
      myArray[i] = 500
    }
    else if(myArray[i] === 'M')
    {
      myArray[i] = 1000
    }
}

for(let step =0; step < myArray.length; step++)
{
//checks if value befor is less than value after if so subtracts lesser from greater
if(myArray[step] < myArray[step+1])
{
total = total + (myArray[step+1] - myArray[step])
console.log(myArray[step] +' is less than ' + myArray[step+1] + ' their for ' +myArray[step+1]+' - ' + myArray[step] +" = " + totall)
//increase step to ensure we dont reuse a unit in the array
step++
}
//if before it greater than after
else{
total += myArray[step]
}

}
//return total
return total
}
romanToInt("MCMXCIV")

// second approach
/* 
use a hash map to store all the roman numeral values
use a loop gether the hash values for the first and second letter
compare and add to total
*/
var RomanToInt = function(t){

const romanNumeral = {
'I':1,
'V':5,
'X':10,
'L':50,
'C':100,
'D':500,
'M':1000
}

let total = 0;
for(let step = 0; step<s.length;step++)
{
let first = romanNumeral[t[step]]
let second = romanNumeral[t[step+1]]
if(first < second)
{
    total += second-first
    step++
}
else
{
total += first
}
}
return total;
}

/* somthing to consider
make sure all the values in the roman numerals string are uppercase
to ensure proper stranslation in both cases the hash map to read them.
Make sure to use the correct data structure*/