// var a =10, b =20, c =30, d =40;

// document.write(`<select>
//     <option>${a}</option>
//     <option>${b}</option>
//     <option>${c}</option>
//     <option>${d}</option>
//  </select>`);

// var age = prompt("Enter your age");

// if(age >= 18){

//     console.log("you are eligible for cnic")
// }

// else{
//     console.log("you are not eligible")
    
// }
// CH:9
// Q:1
//  var city = prompt("Enter Where do you live")

//  if(city== "karachi"){
   
//      alert("welcome to the city of light");

//  else{
//      alert(`welcome the ${city}`);
// }
// // Q;2
 
// var gender = prompt("Enter your gender");
// var message = "";


// if (gender === "male") {
//   message = "Welcome, boy.";
// }
//  else if (gender === "female") {
//   message = "Welcome, sister.";
// }
//  else {
//   message = "Invalid input. Please enter 'male' or 'female'.";
// }

// alert(message);

// Q:3
// var color = prompt("Enter the color of the traffic signal");
// var message ="";

// if(color ==="red"){
//     message="Must stop";
// }
// else if(color ==="yellow"){
//     message ="Ready to move";
// }
// else if (color === "green"){
//     message = "Move now";
// }
// else{
//     message ="invliad entry enter your corrcet color"
// }
// alert(message);

// Q:4
// var fuel =+prompt("Enter the remaining fuel in your car(in litres)");

// if(fuel>0.25){
//     alert("Fuel level is sufficient")
// }
// else if (fuel <= 0.25){
//     alert("Please refill the fuel in your car"); 
 
// }
// Q:5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
//  if (false) {
//     alert("False");       important
//  }
// // if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Q:6
// var percentage =+prompt("enter your percentage and check is grade and remarks");

// if(percentage >=80){
//     alert("A-one");
//     alert("Excellent");
// }
// else if(percentage >=70){
//     alert("A");
//     alert("Good");
// }
// else if(percentage >=60){
//     alert("B");
//     alert("you need to improve")
// }
// else if(percentage <60){
//     alert("Fail")
//     alert("sorry")
// }
// Q:7
// / // var num = +prompt("Guess the secret number");


// if (num === 4){
// alert("“Bingo! Correct answer”.")

// }

// else(num === 1)
//     alert("“Close enough to the correct answer”.")
// Q:8
// **
//    var num = prompt("enter any number") 
//         var input =('numberInput');
//         var number = (input, 10);
        
//         // Check if the input is a valid number
//         if (isNaN(number)) {
//             alert("result")  
    
//         }
        
//         // Check if the number is divisible by 3
//         if (number % 3 === 0) {
//           alert('result')
//         } else {
//             alert('result') 
//         }
// **
// q#9

// var num = +prompt("enter any number "); 
// var message= "";


//     if (num % 2 === 0) {
//   alert("return Even");
// message= "Even"

//     }
//  else {
//    alert= "return Odd";
//    message="odd"
//    }
 
// q#10

// var tem = +prompt("check the temprature");


//  if (tem >= 40 ){
//     message = "it's to hot outside. ";
// }
//  else if (tem >= 30 ){
//     message = "The Weather today is very normal. ";
//  }
//  else if (tem >= 20 ){
//     message = "Today's weather is very Cool. ";
//  }
//   else if  (tem >= 10 );{
//   message = "OMG! Today's weather is so Cool . ";
//   }
// 
// Q:11


// // function calculator() {
//     // // Take the first number as input
//     var a = parseFloat(prompt("Enter the first number: "));

//     // Take the second number as input
//     var b = parseFloat(prompt("Enter the second number: "));

//     // Take the operation as input
//     var operation = prompt("Enter the operation (+, -, *, /, %): ");

//     // Use if statements to perform the operation
//     var result;
//     if (operation === "+") {
//         result = a + b;
//     } else if (operation === "-") {
//         result = a - b;
//     } else if (operation === "*") {
//         result = a * b;
//     } else if (operation === "/") {
//         if (b !== 0) {
//             result = a / b;
//         } else {
//             alert("Error! Division by zero is not allowed.");
//             return;
//         }
//     } else if (operation === "%") {
//         result = a % b;
//     } else {
//         alert("Error! Invalid operation.");
//         return;
//     }

//     // Print the result
//     // alert("The result is: " + result);
// // }

// // Call the function
// // calculator();

// muje 11 ,8 or false wala

// CH 12
// Q:1
 
        
// function checkCharacter() {
//     var userInput = prompt("Enter a character (number or letter): ");  

     
//     function checkCharacterType(char) {
//         var asciiCode = char.charCodeAt(0); //  

//         // Check if it's a number
//         if (asciiCode >= 48 && asciiCode <= 57) {
//             return "The input is a number.";  
//         }
//         // Check if it's an uppercase letter
//         else if (asciiCode >= 65 && asciiCode <= 90) {
//             return "The input is an uppercase letter.";  
//         }
//         // Check if it's a lowercase letter
//         else if (asciiCode >= 97 && asciiCode <= 122) {
//             return "The input is a lowercase letter.";  
//         }
//         else {
//             return "The input is neither a number nor a letter."; 
//         }
//     }

//     var result = checkCharacterType(userInput); 
//     alert(result); 
//     document.write(result); 
// }

// // Call the function to execute it
// checkCharacter();

// // Q:2
// function compareIntegers() {
    
//     var num1 = +prompt("Enter the first integer: ");
//     var num2 = +prompt("Enter the second integer: ");

   
//     if (num1 > num2) {
//         alert(num1 + " is larger.");  
//     } else if (num2 > num1) {
//         alert(num2 + " is larger.");  
//     } else {
//         alert("Both numbers are equal.");  
//     }
// }

 
// compareIntegers();

//  Q:3
 
// let number = prompt("Enter a number:");

 
// number = Number(number);

 
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }
// Q:4
 
// var char = prompt("Please enter a character:");
 
// if (char.length === 1) {
 
//     char = char.toLowerCase();

 
//     const isVowel = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
    
//     console.log(isVowel); 
// } else {
//     console.log("Please enter a single character.");
// }
//  Q:5
 
// let correctPassword = "mySecretPassword123"; 

 
// let enteredPassword = prompt("Please enter your password:");
 
// if (!enteredPassword) {
//     console.log("Please enter your password.");
// } else {
    
//     if (enteredPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password.");
//     } else {
//         console.log("Incorrect password.");
//     }
// }

// Q:6
// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);  

// Q:7
 
// let time = prompt("Please enter time in 24-hour format (e.g., 1900 for 7 PM):");

 
// if (time >= 0 && time < 1200) {
//     console.log("Good Morning!");  
// } else if (time >= 1200 && time < 1800) {
//     console.log("Good Afternoon!"); 
// } else if (time >= 1800 && time < 2100) {
//     console.log("Good Evening!");  
// } else if (time >= 2100 && time < 2400) {
//     console.log("Good Night!"); 
// } else {
//     console.log("Invalid time input. Please enter a valid time in 24-hour format.");
// }
