const pow = (x,n) => x >= 0 && x % 1 == 0  ? x**n:0; // если число не отрицательное и не дробное
const result = pow(2.5,4);
console.log(result);