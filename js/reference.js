/**
 * Created by muigai on 7/18/17.
 */
/**
 1) Values, Types, and Operators

 Inside the computer’s world, there is only data. You can read data, modify data,
 create new data—but anything that isn’t data simply does not exist.

 There are six basic types of values in JavaScript:
 numbers, strings, Booleans, objects, functions, and undefined values.
 */
var number = 1;
var number2 = 243;

var string = "I am a string";
var string2 = "foo bar";

var booleanFalse = true;
var booleanTrue = false;

var obj = {
  name: "Objectman",
  age: Date.now(),
  role: "object",
}

var func = function(apples, oranges) {
  var output = "Here are my " + apples + " and " + oranges;
  console.log("Here are my " + apples + " and " + oranges);
  return output;
}
function namedFunction(apples, oranges) {
  func();
}

/**
 There are two special values, written null and undefined,
 that are used to denote the absence of a meaningful value.
 they are themselves values, but they carry no information.
 */

var imUndefined = undefined;
var imNull = null;

/**
 Program Structure

 Variables
 To catch and hold values, JavaScript provides a thing called a variable.

 Functions
 Executing a function is called invoking, calling, or applying it
 You can call a function by putting parentheses after an expression that produces a
 function value. Usually you’ll directly use the name of the variable that holds the
 function. The values between the parentheses are given to the program inside the
 function. In the example, the alert function uses the string that we give it as the
 text to show in the dialog box. Values given to functions are called arguments.

 Useful built in functions:
 */
alert("This is an alert");
console.log("we logged to the console");
prompt("I am the question you see", "I am the starting answer text");
confirm("Can you confirm with me");

/**
 Conditionals
 Conditional execution is written with the if keyword in JavaScript. In the simple case,
 we just want some code to be executed if, and only if, a certain condition holds.
 */

/**
 Loops

 While and Do Loops
 For Loops
 For Each Loops
 */

