// WRITE A PROGRAM TO PRINT THE MARKS OF A STUDENT IN AN OBJECT USING FOR LOOP
// let marks =
// {
//     'harry': 98,
//     'rohan': 70,
//     'aakash': 7
// }
// for (let i = 0; i < Object.keys(marks).length; i++) {
// console.log("The marks of ", Object.keys(marks)[i], " are ", marks[Object.keys(marks)[i]])
// }


// WRITE THE PROGRAM IN Q1 USING FOR IN LOOP
// for (let mark in marks) {
// console.log("The marks of ", mark, " are ", marks[mark])

// }

// WRITE A PROGRAM TO PRINT "TRY AGAIN" UNTIL THE USER ENTERS THE CORRECT NUMBER
// let cn=8;
// let i
// while(i!=cn)
// {
//     i=prompt("Enter the number")
//     console.log("Try again")
// }
// console.log("You Entered a correct number")

// WRITE A FUNCTION TO FIND MEAN OF 5 NUMBERS
const mean = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}

console.log("Mean of five numbers is ", mean(1, 2, 3, 4, 5))
