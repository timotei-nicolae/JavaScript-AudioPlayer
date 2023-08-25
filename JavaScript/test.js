    //Variables
let Name = 'Timotei';
console.log(Name);

    //Constants
let interestRate = 0.4;
interestRate = 1;
console.log(interestRate);

    //Primitive types
let name = 'Timotei'; //String Literal
let age = 30; //Number Literal
let isApproved = false; //Boolean Literal
let firstName = undefined;
let selectColor = null;

    //Objects
 let person = {
    nume : 'Adrian',
    varsta : 34
 };

 //Dot Notation
 person.name = 'Ion';

 console.log(person.name);

    //Arrays
let selectedColors = ['red', 'black'];
selectedColors[2] = 1;
console.log(selectedColors.length); //length of the list (array)
//console.log(selectedColors[0]); //accessed index color


    //Functions
function greet(FirstName, LastName) {
    console.log('Hello ' + FirstName + ' ' + LastName)
}

greet('John', 'Smith') //call function

//!!! (FirstName, LastName) are parameters and  ('John', 'Smith') are arguments

    //Another function (calculating a value)
function square(number) {
    return number * number;
}

console.log(square(3));