export function countDisplayCharsLength(str: string) {
  let count = 0;
  for (const char of str) {
    if (char.match(/[ -~]/)) {
      count += 0.5;
    } else {
      count += 1;
    }
  }
  return count;
}
