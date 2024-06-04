/**
 * returns array of students for a specific city with their new grade
 * @param {Array<Student>} stds - list of students
 * @param {string} city - city name
 * @param {Array<Grade>} newGrades - list of new grades
 *
 * @returns {Array<Student>} array of students with their grades
 */
export default function updateStudentGradeByCity(stds, city, newGrades) {
  return (
    stds
      .filter((s) => s.location === city)
      .map((s) => {
        const grade = newGrades.find((g) => g.studentId === s.id);
        return ({ ...s, grade: grade ? grade.grade : 'N/A' });
      })
  );
}
