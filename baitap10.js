let n = +prompt("Nhập vào một số chính phương hoặc số không chính phương:");

let sqrt = Math.sqrt(n);
let isPerfectSquare = (sqrt % 1 === 0);

console.log(isPerfectSquare);
document.write(isPerfectSquare);