let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.splice(2, 1);
console.log(numbers);

numbers.splice(1, 2);
console.log(numbers);

numbers.splice(1, 0, 8, 9, 10);
console.log(numbers);
