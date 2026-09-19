console.log("\n BAI 1 ");
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log("Danh sách mảng:", names);

console.log("Phần tử đầu tiên:", names[0]);

console.log("Phần tử cuối cùng:", names[names.length - 1]);

console.log("Số lượng phần tử:", names.length);

names.push("Dũng");
console.log("Mảng sau khi thêm tên mới:", names);

names.pop();
console.log("Mảng sau khi xóa phần tử cuối:", names);

console.log("\n BAI 2 ");
const name2 = ["An", "Bình", "Nam", "Hòa", "Lan"];

for (let i = 0; i < name2.length; i++) {
    console.log(name2[i]);
}


