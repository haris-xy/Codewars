/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

function booleanToString(b){
    if (b) {
      return "true"
    } else
    {
      return "false"
    }  
  }
  
  //OOOoorrr ==> This one-liner:  
  
  let booleanToString = b => b ? "true" : "false"


  //Or like this:

  function booleanToString(b){
    return String(b);
  }

  //OOrr :

  function booleanToString(b){
    return b+'';
  }