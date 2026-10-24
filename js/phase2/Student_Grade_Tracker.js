let students = [
  { name: "Aman", marks: [90, 90, 95] },
  { name: "Priya", marks: [85, 75, 52] },
  { name: "Raj", marks: [60, 55, 70] },
];

function getAverage(marks) {
  return marks.reduce((sum, m) => (sum += m), 0) / marks.length;
}

function getGrade(avg) {
  if (avg >= 90) return "A";
  if (avg >= 75) return "B";
  if (avg >= 60) return "C";
  return "F";
}

students.forEach((std) => {
  let avgmrks = getAverage(std.marks);
  console.log(
    `Average Marks of ${std.name} is ${avgmrks} and grade is ${getGrade(avgmrks)}`,
  );
});
