const fibonacci = function(Num) {
    if (Num <0){
        return "OOPS";
    }
    
    let Array = [0, 1]; //adds initial two to array.
    let x, y;
    for (let i=2; i<=Num; i++){ //i starts on third item of array
       x = Array[i-1]; // = 1 initial, then 2, then 3, then 5
       y = Array[i-2]; // = 0 initial, then 1, then 2, then 3
      Array.push(x+y);
    }
    return Array[Array.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
