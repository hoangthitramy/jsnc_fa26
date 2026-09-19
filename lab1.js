console.log("BÀI 1");

let studentName = "Hoang Thi Tra My";
let currentAge = 19;
let address = "Thanh Hoá";
let isStudent = true;

console.log("Họ tên: " + studentName);
console.log("Tuổi: " + currentAge);
console.log("Địa chỉ: " + address);
console.log("Sinh viên: " + isStudent);


console.log("\nBÀI 2");

let age = 20;

console.log(age);

age = 21;

console.log(age);


console.log("\nBÀI 3");

const a = 10;
const b = 5;

console.log("Tổng: " + (a + b));
console.log("Hiệu: " + (a - b));
console.log("Tích: " + (a * b));
console.log("Thương: " + (a / b));


console.log("\nBÀI 4");

function sayHello(name) {
    console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Bình");
sayHello("Chi");
sayHello("Đức");


console.log("\nBÀI 5");
function sum(a, b) {
    return a + b;
}

const result = sum(13, 23);
console.log(result);


console.log("\nBÀI 6");
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(50000, 3);
console.log(total);


console.log("\nBÀI 7");
function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

const average = calculateAverage(8, 7, 9);

console.log(average);