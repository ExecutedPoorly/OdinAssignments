function sumRange(num) {
  if (num != 1) {

    return num += sumRange(--num);
  }
  else return num;
}

console.log(sumRange(10))
let daaVar = 0;
for (let i= 0; i <= 10; i++){
  daaVar += i;
}
console.log(daaVar, "eee");


function power(base, exponent) {
  if (exponent != 1) {
    exponent --; //decriment by 1 here.
    return base* power(base, exponent); //multiply base by next function return, etc.
  }
  else {
    return base;
  }
}

console.log(power(5,17));


/////////////////////////////// Iteration fibonacci ///////////////
function fibs(fibNum) {
  const array1 = [0, 1]
  if (fibNum < 1) {
    return 0;
  }
  
  for (let i=0; i<fibNum-2; i++) {
    let newNum = array1[i] + array1[i+1];
    array1.push(newNum);
  }
  const garbageVariable = array1.shift()
  return array1;
}

console.log(fibs(8));
///////////////////////

///////////////////////////Scuffed fibonacci recursion:
array3 = [0,1]
let i = 0;
function recursionFib(FibNum) {
  if (FibNum == 0) {
    return 0;
  }
  if (i < FibNum-1) { 
    let newNum = array3[i] + array3[i+1];
    array3.push(newNum);
    i++;
    recursionFib(FibNum);
  }
  else if (i >= FibNum-1) {
    let garbage = array3.shift();
  }
  return array3;//

}

console.log(recursionFib(1), "result");
/////////////////////
