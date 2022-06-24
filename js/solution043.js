/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

let min = function(list){
    return Math.min(...list)
}
let max = function(list){
   return Math.max(...list)
}

//Oorr

let min = function(list){
    let min =list[0];
    for(let i=0; i<list.length; i++){
       let cur = list[i];
       if (cur<min) min=cur;
    }
    return min;
}

let max = function(list){
    let max =list[0];
    for(let i=0; i<list.length; i++){
       let cur = list[i];
       if (cur>max) max=cur;
    }
    return max;
}