function isDate(input) {
  // 1. If the input is already a Date object, check if its value is valid
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  // 2. Try to parse the input into a new Date object
  const parsedDate = new Date(input);

  // 3. Return true only if the parsed value is a valid number/time
  // isNaN() will return true for "Invalid Date", so we flip it with !
  return !isNaN(parsedDate.getTime());
}