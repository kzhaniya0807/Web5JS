// Task 6
console.log("TASK 6");

let fullName = "Zhaniya Karibzhanova";
let age = 18;
const isStudent = true;
let favouriteColour = "violet";

console.log("Full name:", fullName);
console.log("Type:", typeof fullName);

console.log("Age:", age);
console.log("Type:", typeof age);

console.log("Is student:", isStudent);
console.log("Type:", typeof isStudent);

console.log("Favourite colour:", favouriteColour);
console.log("Type:", typeof favouriteColour);

favouriteColour = "pink";
console.log("Updated favourite colour:", favouriteColour);

// Task 7

console.log("TASK 7");

let userName = prompt("Task 7: What is your name?");

if (userName !== null && userName.trim() !== "") {
    alert("Hello, " + userName + "!! How are you?");
}

const myName = "Zhaniya Karibzhanova";
const group = "MT-2505";

const greeting = `My name is ${myName}, and my group is ${group}.`;

console.log(greeting);

// Task 8

console.log("TASK 8");

const firstInput = prompt("Task 8: Enter the first number:");
const secondInput = prompt("Task 8: Enter the second number:");

const firstNumber = Number(firstInput);
const secondNumber = Number(secondInput);

if (
    firstInput !== null &&
    secondInput !== null &&
    firstInput.trim() !== "" &&
    secondInput.trim() !== "" &&
    Number.isFinite(firstNumber) &&
    Number.isFinite(secondNumber)
) {
    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);

    console.log("Sum:", firstNumber + secondNumber);
    console.log("Difference:", firstNumber - secondNumber);
    console.log("Product:", firstNumber * secondNumber);

    if (secondNumber !== 0) {
        console.log("Quotient:", firstNumber / secondNumber);
        console.log("Remainder:", firstNumber % secondNumber);
    } else {
        console.log("Division and remainder by zero are not allowed.");
    }
} else {
    console.log("Please enter two valid numbers.");
}

// Task 9
console.log("TASK 9");

const firstString = "Zhaniya";
const secondString = "Karibzhanova";

console.log("First string:", firstString);
console.log("String length:", firstString.length);
console.log("Uppercase:", firstString.toUpperCase());
console.log("Lowercase:", firstString.toLowerCase());
console.log("First three characters:", firstString.slice(0, 3));
console.log("Combination:", firstString + secondString);

// Task 10

console.log("TASK 10");

let counter = 10;

console.log("Initial value:", counter);

counter++;
console.log("After increment (++):", counter);

counter--;
console.log("After decrement (--):", counter);

counter += 5;
console.log("After adding 5 (+=):", counter);

counter -= 3;
console.log("After subtracting 3 (-=):", counter);

counter *= 2;
console.log("After multiplying by 2 (*=):", counter);

counter /= 4;
console.log("After dividing by 4 (/=):", counter);

// Task 11

console.log("TASK 11");

function calculateDogAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
}

console.log("Dog age 2:", calculateDogAge(2));
console.log("Dog age 5:", calculateDogAge(5));

// Task 12

console.log("TASK 12");

// Greet a user
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Assyltas");
greetUser("Aelin");

// Calculate the sum
function calculateSum(a, b) {
    return a + b;
}

console.log("Sum 1:", calculateSum(3, 4));
console.log("Sum 2:", calculateSum(9, 3));

// Calculate area
function calculateRectangleArea(width, height) {
    return width * height;
}

console.log("Rectangle area 1:", calculateRectangleArea(3, 10));
console.log("Rectangle area 2:", calculateRectangleArea(8, 5));
