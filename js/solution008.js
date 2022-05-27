/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    for (let i=0; i < n; s++){
        str += s;
    }
    return str;
  }
repeatStr(3,"Ha")

  //oooor

  
function repeatStr (n, s) {
    console.log(s.repeat(n));
  }
repeatStr(3,"Ha")
  