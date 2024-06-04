/**
 * returns a string of all the set values that start with a specific string.
 * @param {Set<string>} set - set value
 * @param {string} startString
 *
 * @returns {string} hyphenated string
 */
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') return ('');

  return (
    Array.from(set).reduce((acc, curr) => {
      let ret = acc;
      if (startString && typeof curr === 'string' && curr.startsWith(startString)) {
        if (ret) ret += '-';
        ret += (curr.substring(startString.length));
        return (ret);
      }
      return (ret);
    }, '')
  );
}
