/**
 * returns a string of all the set values that start with a specific string.
 * @param {Set<string>} set - set value
 * @param {string} startString
 *
 * @returns {string} hyphenated string
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return ('');

  const ret = [];
  for (const el of set) {
    if (startString && el.startsWith(startString)) ret.push(el.substring(startString.length));
  }
  return ret.join('-');
}
