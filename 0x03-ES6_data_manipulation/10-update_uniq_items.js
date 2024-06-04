/**
 * returns an updated map for all items with initial quantity at 1.
 * @param {Map<string, number>} map - grocery list
 *
 * @returns {Map<string, number>}
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  for (const [k, v] of map) {
    if (v === 1) map.set(k, 100);
  }

  return (map);
}
