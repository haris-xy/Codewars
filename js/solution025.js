/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/

function abbrevName(name){
    let firstLet = name.charAt(0)
    let secondLet = name.IndexOf(' ') + 1
    return firstLet.toUpperCase() + '.' + name[secondLet].toUpperCase()
}


//solution updated:

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }


// One more

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()
