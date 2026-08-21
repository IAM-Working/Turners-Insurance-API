
function carValue(model, year) {
  if (!model) {
    throw new Error("Model is required");
  }
  if (year === undefined) {
    throw new Error("Year is required");
  }
   if (typeof model !== "string") {
  throw new Error("Model must be a string");
}
  if (typeof year !== "number") {
    throw new Error("Year must be a number");
  }
 
  let totalValue = 0;

  const ASCII_LOWERCASE_OFFSET = 96;
  const FIRST_ALPHABET_POSITION = 1;
  const LAST_ALPHABET_POSITION = 26;

  for (const letter of model) {
    const position =
      letter.toLowerCase().charCodeAt(0) - ASCII_LOWERCASE_OFFSET;

    if (
      position >= FIRST_ALPHABET_POSITION && position <= LAST_ALPHABET_POSITION
    ) {
      totalValue += position;
    }
  }

  return totalValue * 100 + year;
}

module.exports = carValue;