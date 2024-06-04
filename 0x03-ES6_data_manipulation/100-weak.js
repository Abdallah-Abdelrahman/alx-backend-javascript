const weakMap = new WeakMap();
/**
 * query some api
 * @param {Object} endpoint
 * @param {string} endpoint.protocol
 * @param {string} endpoint.name
 */
function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}

export { queryAPI, weakMap };
