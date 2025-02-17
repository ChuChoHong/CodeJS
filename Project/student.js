const students = [
    { name: "Tú", age: 19, score1: 8, score2: 7 },
    { name: "Ngân", age: 20, score1: 6, score2: 7 },
    { name: "Mai", age: 16, score1: 9, score2: 8 },
    { name: "Nhơn", age: 17, score1: 5, score2: 6 }
];


const studentRatings = students.map(student => {
    const avgScore = (student.score1 + student.score2) / 2;
    let rank = avgScore >= 8 ? "Giỏi" : avgScore >= 6 ? "Khá" : "Trung bình";
    return `${student.name}: ${rank}`;
});

console.log("Xếp loại sinh viên:");
console.log(studentRatings.join("\n"));


const totalAvgScore = students.reduce((sum, student) => {
    return sum + (student.score1 + student.score2) / 2;
}, 0);

const classAvgScore = totalAvgScore / students.length;
console.log(`\nĐiểm trung bình của cả lớp: ${classAvgScore.toFixed(2)}`);


const hasUnder18 = students.some(student => student.age < 18);
console.log(`\nCó sinh viên nào dưới 18 tuổi không? ${hasUnder18 ? "Có" : "Không"}`);


const allHaveNames = students.every(student => student.name && student.name.trim() !== "");
console.log(`\nTất cả sinh viên có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);


// Huỳnh Anh Tú-2180603928