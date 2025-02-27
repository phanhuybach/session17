const number = prompt("Nhập số tiền (VNĐ):");
const formattedNumber = Number(number).toLocaleString("vi-VN") + " VNĐ";
console.log(formattedNumber);
