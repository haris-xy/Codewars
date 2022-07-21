// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num){
    let text = ""
    for (let i = 1; i <= num; i++) {
      text += i + ' sheep...'
    }
    return text;
  }

  //Oorr
countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``
