console.log("start");

setTimeout(() => {
  console.log("1st timeout but it will executes after second timeout function");
}, 1000);

setTimeout(() => {
  console.log("second timeout function");
}, 500);

console.log("here the code ends.");

// *****************  REASON  ***************

// Process:
// Start Execution: "Start" is logged immediately.

// First setTimeout: The timer for 1000ms is set, and the function is sent to the Web API.It doesn’t block the main thread.

// Second setTimeout: The timer for 500ms is also set and sent to the Web API.

// End Execution: "End" is logged immediately after.

// Timer Completion: After 500ms, the callback for the second timeout is pushed to the callback queue.After 1000ms, the first timeout callback is also pushed to the queue.

// Event Loop: The event loop checks if the call stack is empty, then executes the callbacks from the queue. Therefore, "Second timeout" is logged before "First timeout" even though both timeouts were initiated sequentially.
