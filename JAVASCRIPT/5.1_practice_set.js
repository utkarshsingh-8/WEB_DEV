// USE LOGICAL OPERATOR TO FIND WHETHER THE AGE OF A PERSON LIES BETWEEN 10 AND 20
let agge = prompt("Enter Your Age")
agge = Number.parseInt(agge)
if(agge >10 && agge <20)
{
    console.log("Your age lies between 2 and 3")
}
else{
    console.log("Your age do not lies between 2 and 3")

}

// DEMONSTRATE THE USE OF SWITCH CASE STATEMENT IN JAVASCRIPT
const expr = "Utkarsh"
switch (expr) {

    case "Utkarsh":
        console.log("Hello I am here for You");
        break;
    case "Singh":
        console.log("Hello I am here");
        break;
    case "Thakur":
        console.log("Hello I am not here");
        break;
    default:
        console.log("Not here");

}

// WRITE A JAVASCRIPT PROGRAM TO FIND WHETHER A NUMBER IS DIVISIBLE BY 2 AND 3
let numm = prompt("Enter Your Age")
numm = Number.parseInt(numm)
if (numm % 2 == 0 && numm % 3 == 0) {
    console.log("Num is divisible by 2 and 3")
}
else {
    console.log("Not divisible by 2 and 3")
}

// WRITE A JAVASCRIPT PROGRAM TO FIND WHETHER A NUMBER IS DIVISIBLE BY EITHER 2 OR 3
let num = prompt("Enter Your Age")
num = Number.parseInt(num)
if (num % 2 == 0 || num % 3 == 0) {
    console.log("Num is divisible by either 2 or 3")
}
else {
    console.log("Not divisible by either 2 or 3")
}

// PRINT "YOU CAN DRIVE" OR "YOU CANNOT DRIVE" BASED ON AGE BEING GREATER THAN 18 USING TERNARY OPERATOR
let age = prompt("Enter Your Age")
age = Number.parseInt(age)
age > 18 ? alert("You can Drive") : alert("You can't Drive")
