// FOR LOOPS IN JS

let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log("Factorial of ", num, "is ", fact)

// FOR IN LOOPS IN JS

let marks =
{
    "Ajay": 55,
    "Vijay": 89,
    "karthik": 5,
    "Ankita": 78
}

for (let value in marks) {
    console.log("Key is ", value , "Value is ", marks[value])
}


