let add = (num1, num2) => {
    if (num1 > 9) {
        throw "num1 is too large"
    }
    else if (num1 < 0) {
        throw"num1 is too small"
    }
    if (num2 > 9) {
        throw"num2 is too large"
    }
    else if (num2 < 0) {
        throw "num2 is too small"
    }


} 

try {
    console.log(add(10, -2))
}
catch (error) {
    console.log("there was an error ! Try again later")
    console.log(error)
}
finally {
    console.log("Done");
}


// git remote add origin https://github.com/sapienology/the-dominated-domain.git
// git branch -M main
// git push -u origin main

// Solve these coding questions in JavaScript, create a repository on GitHub push your answers there and send the link here.

// 1. Find the frequency of elements in array

// 2. Group items on the basis of age of given array of object

// 3.   Program to check a string with balanced brackets.

// 4. Find the nth largest element in a sorted array

// 5. Remove duplicates from an array and return unique values in O(n) complexity.


function filter_list(l) {
  // Return a new array with the strings filtered out
  var filteredList = [];
  for (var i = 0; i < l.length; i++){
    if (l[i].constructor.name !== "String"){
      filteredList.push(l[i]);
    }
  }
  return filteredList;
}
console.log(filter_list([1, 2, 3, 'her', 'she', 'them']));



function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}
console.log(addBinary(4, 7));

function addbinary(a, b) {
    let sum = a + b;
    let x = '';
    while (sum >= 1) {
        let x = sum % 2 + x;
        sum = Math.floor( sum / 2);
    }
    return x;
}
console.log(addbinary(2, 7));