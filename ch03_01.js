let daysOfWeek = new Array();
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek = new Array(7);
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek = new Array(1, 2, 3, 4, 5, 6, 7);
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek.push(10);
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek.push(11, 12);
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek.unshift('a');
console.log(daysOfWeek);
console.log(daysOfWeek.length);

daysOfWeek.unshift('b', 'c');
console.log(daysOfWeek);
console.log(daysOfWeek.length);

console.log(daysOfWeek.pop())
console.log(daysOfWeek);

console.log(daysOfWeek.shift())
console.log(daysOfWeek);
