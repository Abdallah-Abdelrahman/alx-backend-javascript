/**
 * filter list base on city name
 * @param {Array<Student>} stds - list of students
 * @param {string} city - city name to search for
 */
export default function getStudentsByLocation(stds, city) {
  return (stds.filter((s) => s.location === city));
}
