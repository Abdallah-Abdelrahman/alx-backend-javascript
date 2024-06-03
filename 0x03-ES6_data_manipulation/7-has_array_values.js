/**
 * returns a boolean if all the elements in the array exist within the set.
 * @param {Set} set - set value
 * @param {Array} arr - list of any type
 *
 * @returns {boolean} true if each element in the array exists in the set,
 * false otherwise.
 */
export default function hasValuesFromArray(set, arr) {
  return (arr.every((el) => set.has(el)));
}
