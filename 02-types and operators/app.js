console.log(1 < 2 < 3); // true because 1 < 2 is true and true < 3 is true. (Number(true) => 1 >>> Coercion)
console.log(3 < 2 < 1); // true because 3 < 2 is false and false < 1 is true. (Number(false) => 0 >>> Coercion)

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.log(null == 0); // false
console.log(null < 1); // true
