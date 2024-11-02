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

// console.log(getCostTicket(65));

//switch
const printName = (name) => {
  let message;
  switch (name) {
    case "Petr":
      message = `${name} Petrov`;
      break;
    case "Leo":
      message = `${name} Belov`;
      break;
    case "Ivan":
      message = `${name} Ivanov`;
      break;
    default:
      message = `${name} Sidorov`;
      break;
  }

  return message;
};

// console.log(printName("Iva"));

const randomIntFromInterval = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

const rockPaperScissors = () => {
  let data = ["rock", "paper", "scissors"];
  let choicePerson = randomIntFromInterval(0, 2);
  let message;
  let personSubject;
  let computerSubject;
  let choiceComputer = randomIntFromInterval(0, 2);
  if (choicePerson === 2 && choiceComputer === 0) {
    personSubject = data[choicePerson];
    computerSubject = data[choiceComputer];
    message = "Computer win!";
  } else if (choicePerson === 0 && choiceComputer === 2) {
    personSubject = data[choicePerson];
    computerSubject = data[choiceComputer];
    message = "You win!";
  } else if (choiceComputer > choicePerson) {
    personSubject = data[choicePerson];
    computerSubject = data[choiceComputer];
    message = "Computer win!";
  } else if (choicePerson === choiceComputer) {
    personSubject = data[choicePerson];
    computerSubject = data[choiceComputer];
    message = "Draw!";
  } else {
    personSubject = data[choicePerson];
    computerSubject = data[choiceComputer];
    message = "You win!";
  }

  return `${message} You = ${personSubject}, computer = ${computerSubject}`;
};

// console.log(rockPaperScissors());

// let jsPracticeTime = prompt("Сколько часов в день вы практикуете JavaScript?");

// let showJSLearningIntensity =
//   jsPracticeTime >= 3
//     ? () => alert("Вы на правильном пути")
//     : () => alert("Надо больше уделять время практике");

// showJSLearningIntensity();

let date = new Date();

// console.log(date.toLocaleString());

//recursion
// let day = 0;
// const howMuchLearnJS = () => {
//   if (day === 1000) return;
//   day++;
//   console.log(`days count - ${day}`);
//   howMuchLearnJS();
// };

// howMuchLearnJS();

// for (let days = 0; days <= 400; days++) {
//   console.log(days);
// }

//factorial

// let s = 1;

// const getFactorial1 = (n) => {
//   if (n === 0) return;
//   s = s * n;
//   getFactorial1(n - 1);
// };

// getFactorial1(10);

const getFactorial2 = (n) => {
  if (n <= 1) return 1;
  return n * getFactorial2(n - 1);
};

// console.log(getFactorial2(10));

//reduce
let array = [1, 2, 3, 4, 5];

let sum = array.reduce((accumulator, current_value) => {
  return accumulator + current_value;
});

// console.log(sum);

let s = 0;

for (let i = 0; i < array.length; i++) {
  s = s + array[i];
}

// console.log(s);

let courses = [
  {
    course: "JavaScript",
    price: 30000,
  },
  {
    course: "CSS",
    price: 20000,
  },
  {
    course: "React",
    price: 25000,
  },
  {
    course: "Python",
    price: 45000,
  },
];

let newCourses = courses.reduce((newArr, elem) => {
  return {
    ...newArr,
    [elem.course]: elem.price,
  };
}, {});

// console.log(newCourses);

// for ... in

let skillsForJS = {
  1: "HTML",
  2: "CSS",
  3: "JS",
  4: "React JS",
  5: "Node JS",
};

// for (let key in skillsForJS) {
//   console.log(`${+key} - ${skillsForJS[key]}`);
// }

// console.log(Object.keys(skillsForJS).length);

// let cars = [
//   {
//     brand: "BMW",
//     model: "3 series",
//     year: "2023",
//   },
//   {
//     brand: "Audi",
//     model: "A4",
//     year: "2022",
//   },
//   {
//     brand: "Mercedes",
//     model: "C-class",
//     year: "2024",
//   },
//   {
//     brand: "Lexus",
//     model: "IS",
//     year: "2021",
//   },
// ];

// let carForYear = cars.reduce((newArr, car) => {
//   return {
//     ...newArr,
//     [car.brand]: car.year,
//   };
// }, {});

// console.log(carForYear);

// вложенные циклы
let newArray = [];

for (let i = 0; i <= 4; i++) {
  newArray.push([]);
  for (let j = 0; j <= 5; j++) {
    newArray[i].push(j);
  }
}

// console.table(newArray);

let japanCars = ["subaru", "toyota", "suzuki", "honda"];

// for (let i = 0; i < japanCars.length; i++) {
//   console.log(japanCars[i]);
// }

let cars = {
  brand: "BMW",
  model: "3 series",
  year: "2023",
};

// let carsArray = Object.keys(cars);

// for (let i = 0; i < carsArray.length; i++) {
//   console.log(`${carsArray[i]}: ${cars[carsArray[i]]}`);
// }

// console.log(Object.entries(cars));

for (const [key, value] of Object.entries(cars)) {
  console.log(`${key} - ${value}`);
}
