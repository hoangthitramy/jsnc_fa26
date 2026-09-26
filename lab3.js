console.log("\nBAI 1");
const name1 = "Nguyễn Văn An";
const age1 = 20;
const major1 = "Lập trình Web";
const result1 = `Xin chào ${name1}. Bạn ${age1} tuổi. Ngành học: ${major1}`;
console.log(result1);

console.log("\nBAI 2");
const student = {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
    major: "Lập trình Web"
};
const info2 = `Mã sinh viên: ${student.id}\nHọ tên: ${student.name}\nTuổi: ${student.age}\nNgành: ${student.major}`;
console.log(info2);

console.log("\nBAI 3");
const add = (a, b) => a + b;

console.log("Tổng (5 + 3):", add(5, 3));

console.log("\nBAI 4");
const square = x => x * x;
const sum = (a, b) => a + b;
const sayHello = name => `Xin chào ${name}`;
console.log("Bình phương của 5:", square(5));
console.log("Tổng của 10 và 20:", sum(10, 20));
console.log(sayHello("An"));

console.log("\nBAI 5");
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Mảng nhân đôi:", doubledNumbers);

console.log("\nBAI 6");
const students = [
    { id: 1, name: "An" },
    { id: 2, name: "Bình" },
    { id: 3, name: "Cường" }
];
const studentNames = students.map(student => student.name);

console.log("Kết quả Bài 6:", studentNames);
const bt6Output = document.getElementById("bt6-output");
if (bt6Output) {
    bt6Output.innerHTML = "Array kết quả: " + JSON.stringify(studentNames);
}

console.log("\nBAI 8");
const productsBt8 = [
    { id: 1, name: "iPhone 15", price: 20000000 },
    { id: 2, name: "MacBook Air", price: 25000000 },
    { id: 3, name: "AirPods", price: 5000000 }
];

const productsSimpleContainer = document.getElementById("products-simple");
if (productsSimpleContainer) {
    productsSimpleContainer.innerHTML = productsBt8.map(product => `
        <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">${product.id}</td>
            <td class="px-4 py-2 border border-gray-300 font-medium">${product.name}</td>
            <td class="px-4 py-2 border border-gray-300 text-amber-600 font-semibold">${product.price.toLocaleString()}đ</td>
            <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Edit</a>
                    <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}


const productsBt33 = [
    { id: 1, name: "Áo thun", price: 150000, category: "Thời trang" },
    { id: 2, name: "Quần jean", price: 350000, category: "Thời trang" },
    { id: 3, name: "Giày sneaker", price: 800000, category: "Giày" }
];

const mainProductTableContainer = document.getElementById("main-product-table");
if (mainProductTableContainer) {
    mainProductTableContainer.innerHTML = productsBt33.map(product => `
        <tr class="hover:bg-gray-50">
            <td class="px-4 py-2 border border-gray-300">${product.id}</td>
            <td class="px-4 py-2 border border-gray-300 font-medium">${product.name}</td>
            <td class="px-4 py-2 border border-gray-300 text-amber-600 font-semibold">${product.price.toLocaleString()}đ</td>
            <td class="px-4 py-2 border border-gray-300">${product.category}</td>
            <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                    <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">Edit</a>
                    <button class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}
