//15. Write a function debounce(func, delay) that prevents a function from being called again until a certain delay has passed since its last call.


// function logMessage() {
//     console.log("Function executed!");
//   }
  
//   const debouncedLog = debounce(logMessage, 1000);
  
//   debouncedLog(); // Call 1
//   debouncedLog(); // Call 2 (Previous call is canceled)
//   debouncedLog(); // Call 3 (Previous call is canceled)
  
//   // After 1 second of no calls, "Function executed!" is logged
  

  function debounce(func, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer); // Clear the previous timer
      timer = setTimeout(() => func.apply(this, args), delay); // Set a new timer
    };
  }
  
  // Example Usage:
  const logMessage = () => console.log("Debounced Function Executed!");
  
  const debouncedLog = debounce(logMessage, 1000);
  
  debouncedLog(); // Call 1
  debouncedLog(); // Call 2 (Resets Timer)
  debouncedLog(); // Call 3 (Resets Timer)
  
  // "Debounced Function Executed!" will appear after 1 second if no more calls happen.
  