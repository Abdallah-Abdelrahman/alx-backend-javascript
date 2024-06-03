/**
 * returns a boolean if all the elements in the array exist within the set.
 * @param {Set} set - set value
 * @param {Array} arr - list of any type
 *
 * @returns {boolean}
 */
export default function hasValuesFromArray(set, arr) {
  return (arr.every((el) => set.has(el)));
}
