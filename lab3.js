
const name1 = "Nguyễn Văn An";
const age1 = 20;
const major1 = "Lập trình Web";
const result1 = `Xin chào ${name1}. Bạn ${age1} tuổi. Ngành học: ${major1}.`;
console.log("BAI 1");
console.log(result1);

const student = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  major: "Lập trình Web",
};

const info2 = `Mã sinh viên: ${student.id}
Họ tên: ${student.name}
Tuổi: ${student.age}
Ngành: ${student.major}`;

console.log("\nBAI 2");
console.log(info2);


const add = (a, b) => a + b;

console.log("\nBAI 3");
console.log("Tổng 5 + 3 =", add(5, 3));


const square = x => x * x;

const sum = (a, b) => a + b;

const sayHello = name => `Xin chào ${name}`;

console.log("\nBAI 4");
console.log("Bình phương của 5:", square(5)); 
console.log("Tổng của 10 và 20:", sum(10, 20)); 
console.log(sayHello("An")); 
