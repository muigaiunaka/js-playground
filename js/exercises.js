// Create js/exercises.js
// in exercises.js do these:
// 1) Create a program that converts a long phrase to its acronym
// For example, given the string Portable Network Graphic, console.log PNG
// For example, given the string HyperText Markup Language, console.log HTML
//
// 2) We have the following arrays :
// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// var o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// ...
// "7th choice is Yellow."
//
// 3) Write a JavaScript function to find if an array contains a specific element.
// The function will take in an array and the element.
// For example, given ["red", 2, "BrickSquad", 17, 43] and "blue", the console log should read false
// For example, given [2, 5, 7, 9, 10, "ugh"] and 5, the console log should read true
var longPhrase = document.getElementById('inputVal');
var acronym = "Portable Network Graphic";
function test () {
  if (longPhrase.value == acronym){
    console.log("PNG");
  } else {
      console.log("wrong!");
  }
}

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"];
color.forEach(function(element,k){
  if (k == 0){
    console.log(k+1 + o[1] + " choice is " + color[k]);
  } else if (k == 1){
    console.log(k+1 + o[2] + " choice is " + color[k]);
  } else if (k == 2){
    console.log(k+1 + o[3] + " choice is " + color[k]);
  } else {
    console.log(k+1 + o[0] + " choice is " + color[k]);
  }
});

var checker = document.getElementById('inputArrayVal');
var firstArray = ["red", 2, "BrickSquad", 17, 43];
function trueOrFalse () {
  firstArray.forEach(function(element){
    if (checker.value == element){
      console.log("true");
    } else{
      console.log("false");
    }
  })
}
//write a function that takes in an input
//this input will be compared to every single element in the arrays
//using the forEach method
