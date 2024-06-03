/**
 * sum the students ids
 * @param {Array<Student>} stds - list of students
 *
 * @returns {number} the sum of ids
 */
export default function getStudentIdsSum(stds) {
  return stds.reduce((acc, std) => acc + std.id, 0);
}
