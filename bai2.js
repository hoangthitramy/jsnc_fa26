// array []
const student1 = "Nguyễn Văn An";
const student2 = "Trần Văn Bình";
const student3 = "Lê Văn Nam";

const students = ["Nguyễn Văn An", "Trần Văn Bình", "Lê Văn Nam"];
const ids = [1,5,23,45,54];
const actives = [true, false, 42,"hoadv21"];
// danh index: 0,1,2
console.log(students);
students[0] = "hoadv";
// studens = ["hoadv"]; -> error
console.log(students.length);
console.log(students.unshift);


//for
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}