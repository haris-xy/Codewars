/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

function check(a, x) {
    if (a.includes(x))
    return true
    else return false
  }

  // OOrr

function check(a, x) {
    return a.includes(x) ? true : false
  }

  //Oor
const check = (a,x) => a.includes(x);


//Oor

function check(a,x){
    return a.includes(x);
  };

  //oor

 function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }

  // ooRR

 function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }