// console.log("Hello, World");
// console.log("Hello, St-Peterburg");

//Number и операторы
let num1 = 10;
let num2 = 5;

let num = num1 ** num2;

let x = 4;
let y = "4";

// console.log(x === y);

//array

let arr1 = new Array(10);
let arr2 = ["yellow", "green", "black", "grey"];

arr2.splice(2, 0, "red", "white");

let element = arr2.find((el) => el === "red");

// console.log(arr2.sort());

//Object

let person = {
  first_name: "Leo",
  last_name: "Belov",
  age: 32,
};

// console.log(person);

//function

function sumNumbers(array) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num += array[i];
  }

  return num;
}

// console.log(sumNumbers([1, 2, 3, 4, 5, 2, 23432, 2342354, 234, 234]));

//if else

function getCostTicket(age) {
  let cost = 0;
  let message;
  if (age <= 3) {
    message = "Access is free";
  } else if (age > 3 && age <= 12) {
    cost = 5;
    message = `The cost of the passage is ${cost} dollars`;
  } else if (age > 12 && age < 65) {
    cost = 10;
    message = `The cost of the passage is ${cost} dollars`;
  } else {
    cost = 7;
    message = `The cost of the passage is ${cost} dollars`;
  }

  return message;
}

console.log(getCostTicket(65));
