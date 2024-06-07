/*Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.*/

function getLastWordLength(sentence) {
  // Normalize the sentence before processing
  sentence = sentence.trim().toLowerCase();

  // Split into words using a flexible regular expression for delimiters
  const words = sentence.split(/\W+/);

  // Check for empty words array
  if (!words.length) return 0;

  // Find the last non-empty word
  let lastWord = "";
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i]) {
      lastWord = words[i];
      break;
    }
  }

  // Remove any remaining non-alphanumeric characters
  lastWord = lastWord.replace(/[^a-z0-9]/g, "");

  return lastWord.length;
}

console.log(getLastWordLength("if this was an  example."));

console.log(getLastWordLength("you're"));
