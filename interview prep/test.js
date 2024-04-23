function romanToInt(roman) {
  const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  // Input validation for characters
  if (!/^[IVXLCDM]+$/i.test(roman)) {
    throw new Error("Invalid Roman numeral: Contains invalid characters");
  }

  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = romanMap[roman[i]];
    const next = romanMap[roman[i + 1]];

    if (next && current < next) {
      // Check for valid subtractive cases only
      if (
        (current == 1 && (next == 5 || next == 10)) ||
        (current == 10 && (next == 50 || next == 100)) ||
        (current == 100 && (next == 500 || next == 1000))
      ) {
        result += next - current;
        i++;
      } else {
        throw new Error("Invalid Roman numeral: Invalid order");
      }
    } else {
      result += current;
    }
  }

  return result;
}
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("XIV")); // Output: 14
console.log(romanToInt("CMXCIX")); // Output: 999
console.log(romanToInt("VX")); // Output: 3
