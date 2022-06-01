function squareSum(numbers){
    let arr = numbers.map(x=>x**2)
    return arr.reduce((x,y)=>x+y,0)
    }