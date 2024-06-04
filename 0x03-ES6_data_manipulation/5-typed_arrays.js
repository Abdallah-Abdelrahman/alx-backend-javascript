/**
 * returns a new ArrayBuffer with an Int8 value at a specific position
 * @param {number} length
 * @param {number} position
 * @param {number} value
 *
 * @returns ArrayBuffer
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  if (position >= length || value < -128 || value > 127) throw new Error('Position outside range');
  int8Array[position] = value;

  return (buffer);
}
