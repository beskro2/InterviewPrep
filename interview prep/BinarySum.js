function addBinary(a, b) {
  // Validate input strings
  if (!/^[01]+$/.test(a) || !/^[01]+$/.test(b)) {
    return "Invalid input: Binary strings must contain only 0s and 1s";
  }

  // Ensure strings are of equal length (optional)
  const maxLength = Math.max(a.length, b.length);
  a = a.padStart(maxLength, "0");
  b = b.padStart(maxLength, "0");

  let result = "";
  let carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const bitA = parseInt(a[i], 2);
    const bitB = parseInt(b[i], 2);

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  // Handle potential overflow
  if (carry === 1) {
    result = "1" + result;
  }

  return result;
}

console.log(addBinary("1010", "110")); // Output: "10000"
console.log(addBinary("11110", "1234"));
