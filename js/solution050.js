/*
Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/

function reverseWords(str){
    let newArr = str.split(" ");
    newArr.reverse();  
  return str = newArr.join(" ")
  }

  //Ooorr

const reverseWords = s => s
.split` `
.reverse()
.join` `;

//Ooorr
return str.split(" ").reverse().join(" ")