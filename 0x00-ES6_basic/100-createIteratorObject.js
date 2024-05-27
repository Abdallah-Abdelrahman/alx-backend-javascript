export default function createIteratorObject(report) {
  const iterator = [];
  for (const k in report.allEmployees) {
    if (report.allEmployees[k]) {
      // the condition just to silence the linter
      iterator.push(...report.allEmployees[k]);
    }
  }
  return (iterator);
}
