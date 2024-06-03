export default function getListStudentIds(users) {
  if (!Array.isArray(users)) return ([]);
  return (users.map((u) => u.id));
}
