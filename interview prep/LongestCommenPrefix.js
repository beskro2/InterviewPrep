/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
var strs = ["flower", "flow", "flight"]

var longestCommonPrefix = function(str){
    
    if(str.length ===0)
    {
        return ""
    }

    let prefix = str[0]

    for (let word of strs)
    {
        while (word.indexOf(prefix)!== 0)
        {
            prefix = prefix.slice(0,-1)
            if (prefix === "") return ''
        }
    }
    console.log(prefix)
 return prefix
}
longestCommonPrefix(strs)