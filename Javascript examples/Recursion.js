https://javascript.info/recursion
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8

recursive


function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}


The current function is paused.
The execution context associated with it is remembered in a special data structure called execution context stack.
The nested call executes.
After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped.

////////////////////////
During the execution of pow(2, 1), unlike before, the condition n == 1 is truthy, so the first branch of if works:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
There are no more nested calls, so the function finishes, returning 2.

As the function finishes, its execution context is not needed anymore, so it’s removed from the memory. The previous one is restored off the top of the stack:




https://javascript.info/recursion
