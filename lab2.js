console.log("\nLAB 2 ");

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
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20
    },
    {
        id: 2,
        name: "Trần Văn Bình",
        age: 21
    },
    {
        id: 3,
        name: "Lê Văn Nam",
        age: 20
    }
];

console.log("Danh sách sinh viên:", students);

console.log("Tên sinh viên đầu tiên:", students[0].name);

console.log("Tuổi sinh viên thứ hai:", students[1].age);

console.log("Danh sách sinh viên:");

for (let i = 0; i < students.length; i++) {
    console.log(
        "ID:", students[i].id,
        "- Tên:", students[i].name,
        "- Tuổi:", students[i].age
    );
}

console.log("Tên của tất cả sinh viên:");

for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}


console.log("\nBÀI 5");

const students2 = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 20
    },
    {
        id: 2,
        name: "Trần Văn Bình",
        age: 21
    },
    {
        id: 3,
        name: "Lê Văn Nam",
        age: 20
    }
];

let html = "";

for (let i = 0; i < students2.length; i++) {

    html += `
        <div>
            <h3>${students2[i].name}</h3>
            <p>Tuổi: ${students2[i].age}</p>
        </div>
    `;
}

document.getElementById("students").innerHTML = html;

