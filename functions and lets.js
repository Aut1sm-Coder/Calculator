!open.strict;
console.clear();

//Variablen

//Konstanten

//Funktionen
console.log("For a multiplication please enter number*number!");
console.log("For a division please enter number/number!");
console.log("For a addition please enter number+number!");
console.log("For a subtraction please enter number-number!");

input = number(prompt(""));

if (input.includes("*")) {
    let numbers = input.split("*");
    let result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    console.log("Result: " + result);
} else if (input.includes("/")) {
    let numbers = input.split("/");
    let result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    console.log("Result: " + result);
} else if (input.includes("+")) {
    let numbers = input.split("+");
    let result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    console.log("Result: " + result);
} else if (input.includes("-")) {
    let numbers = input.split("-");
    let result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    console.log("Result: " + result);
}