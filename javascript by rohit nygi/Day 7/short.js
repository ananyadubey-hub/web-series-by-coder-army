const names = ["Ananya", "Ekta", "Riya", "Aarav", "Karan"];
names.sort();
console.log(names);

//upr wale m normal alphabatic se compair kr rha h



//ascii
const names1 = ["ananya", "Ekta", "Riya", "Aarav", "Karan"];
names.sort();
console.log(names1);


// //reverse
// const names12 = ["Ananya", "Ekta", "Riya", "Aarav", "Karan"];
// names.reverse();
// console.log(names12);




const numbers = [10, 20, 30, 40, 50];
numbers.sort();
console.log(numbers);




const numbers1= [50, 10, 5, 30, 20, 40];

// sort() by default sorts as strings, so we use a compare function:
numbers1.sort();

console.log(numbers1); // [5, 10, 20, 30, 40, 50]

//reverse

const numbers11= [50, 10, 5, 30, 20, 40];

// sort() by default sorts as strings, so we use a compare function:
numbers11.reverse();

console.log(numbers11); // [5, 10, 20, 30, 40, 50]


//multidata
const mixedData = ["Ananya", 25, true, null, { city: "Gorakhpur" }, [10, 20, 30]];
mixedData.sort();
console.log(mixedData);
