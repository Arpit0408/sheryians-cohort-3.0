let students = [
    { name: "Aman", marks: [80, 90, 75] },
    { name: "Priya", marks: [95, 85, 92] },
    { name: "Raj", marks: [60, 55, 70] }
];

function getAverage(marks) {
    return marks.reduce((acc, marks) => acc + marks, 0) / marks.length;
};

function getGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 60) return "C";
    return "F";
}

students.forEach((e) => {
    let avg = getAverage(e.marks);
    console.log(`Grade of ${e.name} is ${getGrade(avg)}`);
})