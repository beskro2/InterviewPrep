/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false*/

let right="[{}]()"
let wrong='{]()'
let wrong2="{{}"
let test = wrong2

var validParentheses = true;

let store =[];

while(test.length != 0)
{
    //if the first character is a open ({[ this will place in the array - im using as a stack
if(test.charAt(0) === '(' || test.charAt(0)=== '{' || test.charAt(0) === '[')
{
    console.log(test.charAt(0));
    store.push(test.charAt(0));
    test = test.slice(1,test.length);
    console.log(test);
}

//check for matches for ")"
if(test.charAt(0) === ')' )
{
  if(store.pop() ==='(')
  {
    test = test.slice(1,test.length);
  }
  else{
    validParentheses=false;
   
    break;
  }
}
//check for matches for ']'
if(test.charAt(0) === ']' )
{
  if(store.pop() ==='[')
  {
    test = test.slice(1,test.length);
  }
  else{
    validParentheses=false;
  
    break;
  }
}
//check for matches for '}'
if(test.charAt(0) === '}' )
{
  if(store.pop() ==='{')
  {
    test = test.slice(1,test.length);
  }
  else{
    validParentheses=false;
    
    break;
  }
}
}

if(store.length>0)
{
    validParentheses=false;
}

console.log(validParentheses);

/* the ideal data structure for this is a stack. an array in javascript as the push pop functions that we need for this project.
somethings to consider: 
make sure that both the stack and string are empty before returning a string like "[([]) could pass if you don't implement this.
ensure that the string only contains (){}[]
*/ 