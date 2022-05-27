/* Back in the old days 10 merchants should contribute gold to a wise king. 
Each merchant should bring 10 gold ingots that weight 1kg.
One of them wanted to make a fool out of the king and tried to steal 100 grams of gold out of every
gold ingot, in total 1kg(so that they weight 0.9kg each). A king spy has heard of that conspiracy and 
warned the king. Tomorow the merchants came to the kings hall with their gold ingots.
The king found th thief  with only one weighing on a scale.
How did he solved that ? */

function calculate(...arr) {
    // The king brought a scale  in the hall
    let scale  = [];
   // He ordered that the first merchatn trows one ingot in the scale, the second one 2 ingots...the tenth 10 ingots.
    for (let i = 0; i<arr.length;i++) {
        scale.push(arr[i].slice(0,i+1))
    }
    // Then  he ordered to weight them
  let count = scale.reduce((acc, val) => acc.concat(val), []).reduce((x,y)=>x+y);
//   If all ingots were 1kg each then there would be 55 kg of gold in the scale
//  1kg (from first merchatn) + 2kg (second merchant) + 3 + 4 + 5 + 6 + 7 + 8 + 9 +10 (from th tenth menrchant).
  switch (true) {
    //   if one ingot is 0.9kg
      case count == 54.1:
          console.log("First merchant is stealing");
          break;
    // if two ingots are 0.9kg
      case count == 52.3:
          return ("Second merchant is stealing");
        break;
    // if three ingots are 0.9kg
      case count == 49.6:
          return ("Third merchant is stealing");
          break; 
    // if four ingots are 0.9kg
      case count == 46:
          return ("Fourth merchant is stealing");
          break;
    // if five ingots are 0.9kg
      case count == 41.5:
          return ("Fifh merchant is stealing");
          break;
    // if six ingots are 0.9kg
      case count == 36.1:
          return ("Sixth merchant is stealing");
          break;
    //  if seven ingots are 0.9kg
      case count == 29.8:
          return ("Seventh merchant is stealing");
          break;
    //  if eight ingots are 0.9kg
      case count == 22.6:
          return ("Eighth merchant is stealing");
          break;
    //  if nine ingots are 0.9kg
      case count == 14.5:
          return ("Ninth merchant is stealing");
          break;
    //  if ten ingots are 0.9kg
      case count == 5.5:
          return ("Tenth merchant is stealing")


  }
}