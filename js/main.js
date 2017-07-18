( function () {
  function testJSLoading () {
    console.log("it's loaded!");
    // alert("what's up, dog?");
  }
  testJSLoading();
  function printArray (apple) {
    var itr = 0;
    while (itr < apple.length) {
      console.log(apple[itr]);
      itr++;
    }
  }
  var abc = ["a","b","c","d","e","f"];
  var nums = [1,2,3,4,5,6,7];
  var booleans = [true, false,true,false,true,false,true,false];
  printArray(nums);

  function printArrayTwo (arr) {
    var itr = 2;
    while (itr < arr.length) {
      // opens an alert showing a string which is concatenated to the value at the index of the array
      alert("here's your value: " + arr[itr])
      itr++;
    }
  }
  printArrayTwo(abc);

}) ();
