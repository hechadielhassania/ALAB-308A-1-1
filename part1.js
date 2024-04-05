// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

let counter = 0;

function incrementAndCall() {
  counter++;
  incrementAndCall();
}

try {
  incrementAndCall();
} catch (error) {
  console.log("Stack overflow error occurred.");
  console.log("Counter value at overflow:", counter);
}

//When you run this code, it will increment a counter variable each time the function incrementAndCall is called recursively. Eventually, the call stack will overflow, triggering the catch block, which will log the error and the value of the counter variable at the time of overflow.