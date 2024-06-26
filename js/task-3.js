function filterArray(array, value) {
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    if (array[i] > value) {
      numbers.push(array[i]);
    }
  }
  return numbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
