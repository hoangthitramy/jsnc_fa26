console.log("\nLAB 2");
console.log("\nBÀI 1");
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
console.log("Danh sách mảng:", names);
console.log("Phần tử đầu tiên:", names[0]);
console.log("Phần tử cuối cùng:", names[names.length - 1]);
console.log("Số lượng phần tử:", names.length);

names.push("Dũng");
console.log("Mảng sau khi thêm tên mới:", names);

names.pop();
console.log("Mảng sau khi xóa phần tử cuối:", names);

console.log("\nBÀI 2");
const names2 = ["An", "Bình", "Nam", "Hòa", "Lan"];
for (let i = 0; i < names2.length; i++) {
    console.log(names2[i]);
}
console.log("\nBÀI 3");
const student = { 
    id: 1, 
    name: "Nguyễn Văn An", 
    age: 20, 
    email: "an@gmail.com", 
    major: "CNTT" 
};
console.log("Thông tin sinh viên:", student);
console.log("Tên sinh viên:", student.name);
console.log("Tuổi:", student.age);
console.log("Email:", student.email);

student.age = 21;
console.log("Tuổi sau khi thay đổi:", student.age);

student.phone = "0123456789"; 
console.log("Thông tin sau khi thêm số điện thoại:", student);

console.log("\nBÀI 4");
const students = [
    { id: 1, name: "Nguyễn Văn An", age: 20 },
    { id: 2, name: "Trần Văn Bình", age: 21 },
    { id: 3, name: "Lê Văn Nam", age: 20 }
];
console.log("Danh sách sinh viên:", students);
console.log("Tên sinh viên đầu tiên:", students[0].name);
console.log("Tuổi sinh viên thứ hai:", students[1].age);

console.log("Danh sách sinh viên:");
for (let i = 0; i < students.length; i++) {
    console.log("ID:", students[i].id, "- Tên:", students[i].name, "- Tuổi:", students[i].age);
}

console.log("Tên của tất cả sinh viên:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

console.log("\nBÀI 5");
const students2 = [
    { id: 1, name: "Nguyễn Văn An", age: 20 },
    { id: 2, name: "Trần Văn Bình", age: 21 },
    { id: 3, name: "Lê Văn Nam", age: 20 }
];

let htmlStudents = ""; 
for (let i = 0; i < students2.length; i++) {
    htmlStudents += `<div> <h3>${students2[i].name}</h3> <p>Tuổi: ${students2[i].age}</p> </div>`;
}

const studentsContainer = document.getElementById("students");
if (studentsContainer) {
    studentsContainer.innerHTML = htmlStudents;
}

console.log("\nBÀI TẬP TỔNG HỢP");
const products = [
    { id: 1, name: "iPhone 15", price: 20000000 },
    { id: 2, name: "Samsung Galaxy S24", price: 18000000 },
    { id: 3, name: "Xiaomi 14", price: 12000000 }
];

console.log("Danh sách sản phẩm:", products);
console.log("\nTên sản phẩm - Giá:");
for (let i = 0; i < products.length; i++) {
    console.log(products[i].name + " - " + products[i].price);
}

let total = 0;
for (let i = 0; i < products.length; i++) {
    total = total + products[i].price;
}
console.log("\nTổng giá của tất cả sản phẩm:", total);

let htmlProducts = ""; 
for (let i = 0; i < products.length; i++) {
    htmlProducts += `<p> ${products[i].name} - ${products[i].price} </p>`;
}

const productList = document.getElementById("products");
if (productList) {
    productList.innerHTML = htmlProducts;
}
