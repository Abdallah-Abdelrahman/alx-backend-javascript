export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arrayCopy = array;
  for (const value of array) {
    arrayCopy[i] = appendString + value;
    i += 1;
  }

  return arrayCopy;
}
