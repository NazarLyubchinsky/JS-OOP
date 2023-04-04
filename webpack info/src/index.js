// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages";
import "./scripts/modules/HM-26-03/Task2"
import "./scripts/modules/HM-26-03/Task4"

// import modules
import { Circle } from "./scripts/modules/HM-26-03/Task1";

import { CssClass } from "./scripts/modules/HM-26-03/Task3";


// TASK 1
const circle = new Circle(5);
console.log("колo радіусом:" + " " + circle.radius);
console.log("діаметр:" + " " + circle.diameter);
console.log("площа:" + " " + circle.area);
console.log("довжина:" + " " + circle.length);

console.log("---");

console.log("новий радіус кола:");
circle.radius = 10;
console.log("колo радіусом:" + " " + circle.radius);
console.log("діаметр:" + " " + circle.diameter);
console.log("площа:" + " " + circle.area);
console.log("довжина:" + " " + circle.length);

console.log("------");

// task 2 в папці 

// Task 3
const styleClass = new CssClass('container');
styleClass.setStyle('color', 'red');
styleClass.setStyle('font-size', '20px');
styleClass.removeStyle('color');
console.log(styleClass.getCss());

console.log("------");

// Task 4


