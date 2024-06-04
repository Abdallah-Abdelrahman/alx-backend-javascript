/**
 * returns a new ArrayBuffer with an Int8 value at a specific position
 * @param {number} length
 * @param {number} position
 * @param {number} value
 *
 * @returns ArrayBuffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return (view);
}
